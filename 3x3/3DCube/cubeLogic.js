// TODO unify with v1
// TODO bring login from the iframe

(function() {
  EventEmitter = function() {
    var listeners = {};

    this.on = function(event, callback) {
      listeners[event] ||= [];
      listeners[event].push(callback)
    }

    this.emit = function(event) {
      listeners[event] ||= [];
      listeners[event].forEach(function(callback) {
        callback();
      })
    }
  }

  function CubeCSS(options) {
    var ee = new EventEmitter();

    options ||= {};

    options.colorUp    ||= "#ffd500";
    options.colorDown  ||= "#ffffff";
    options.colorLeft ||= "#b71234";
    options.colorRight  ||= "#ff5800";
    options.colorBack ||= "#0046ad";
    options.colorFront  ||= "#009b48";

    options.colorPlastic ||= "black";

    var CONTAINER = options.container;

    var RX = -20;
    var RY = -20;
    var RZ = 0;

    if(options.hasOwnProperty("rx")) RX = parseInt(options.rx);
    if(options.hasOwnProperty("ry")) RY = parseInt(options.ry);
    if(options.hasOwnProperty("rz")) RZ = parseInt(options.rz);

    options.cubieSize ||= Math.floor(CONTAINER.offsetWidth / 6);
    options.cubieSize ||= 40;

    var COLOR_BY_FACE = {
      up: options.colorUp,
      down: options.colorDown,
      right: options.colorRight,
      left: options.colorLeft,
      front: options.colorFront,
      back:options.colorBack
    };

    var CUBIE_SIZE = options.cubieSize;

    options.transition ||= "transform 350ms ease-out 150ms";
    options.perspective ||= CUBIE_SIZE * 12;

    function buildSticker(position) {
      var sticker = document.createElement("div");

      sticker.classList.add("sticker");
      sticker.style.backgroundColor = COLOR_BY_FACE[position];
      sticker.style.width = "100%";
      sticker.style.height = "100%";
      sticker.style.borderRadius = "10%"; // TODO configurable???

      return sticker;
    }

    function hasSticker(x, y, z, position) {
      if((x === 0) && (position === "left"))
        return true;
      if((x === 2) && (position === "right"))
        return true;
      if((y === 0) && (position === "up"))
        return true;
      if((y === 2) && (position === "down"))
        return true;
      if((z === 2) && (position === "front"))
        return true;
      if((z === 0) && (position === "back"))
        return true;

      return false;
    }

    function buildFace(x, y, z, position) {
      var face = document.createElement("div");

      face.classList.add("face");
      face.classList.add(position);

      face.style.position = "absolute";
      face.style.padding = "5%"; // TODO configurable???
      face.style.width = "" + CUBIE_SIZE + "px";
      face.style.height = "" + CUBIE_SIZE + "px";
      face.style.backgroundColor = options.colorPlastic;

      switch(position) {
        case "up":
          face.style.transform = "translateY(-" + (CUBIE_SIZE / 2) + "px) rotateX(90deg)";
          break;
        case "down":
          face.style.transform = "translateY(" + (CUBIE_SIZE / 2) + "px) rotateX(-90deg)";
          break;
        case "right":
          face.style.transform = "translateX(" + (CUBIE_SIZE / 2) + "px) rotateY(90deg)";
          break;
        case "left":
          face.style.transform = "translateX(-" + (CUBIE_SIZE / 2) + "px) rotateY(-90deg)";
          break;
        case "front":
          face.style.transform = "translateZ(" + (CUBIE_SIZE / 2) + "px)";
          break;
        case "back":
          face.style.transform = "translateZ(-" + (CUBIE_SIZE / 2) + "px)";
          break;
      }

      if(hasSticker(x, y, z, position)) {
        face.appendChild(buildSticker(position));
      }

      return face;
    }

    function buildCubie(x, y, z) {
      var cubie = document.createElement("div");

      cubie.classList.add("cubie");

      cubie.style.transform = "translate3d(" + (x * CUBIE_SIZE) + "px, " + (y * CUBIE_SIZE) + "px, " + (z * CUBIE_SIZE - CUBIE_SIZE) + "px)";
      cubie.style.transformStyle = "preserve-3d";
      cubie.style.width = "" + CUBIE_SIZE + "px";
      cubie.style.height = "" + CUBIE_SIZE + "px";

      ["up", "down", "right", "left", "front", "back"].forEach(function(face) {
        cubie.appendChild(buildFace(x, y, z, face));
      });

      return cubie;
    }

    function buildCubieContainer(x, y, z) {
      var cubieContainer = document.createElement("div");

      cubieContainer.classList.add("cubie-container");

      cubieContainer.style.transition = options.transition;
      cubieContainer.style.transformStyle = "preserve-3d";
      cubieContainer.style.position = "absolute";
      cubieContainer.style.top = "0";
      cubieContainer.style.left = "0";
      cubieContainer.style.bottom = "0";
      cubieContainer.style.right = "0";

      cubieContainer.appendChild(buildCubie(x, y, z));

      return cubieContainer;
    }

    function buildCube() {
      var cube = document.createElement("div");

      cube.classList.add("cube");

      cube.style.position = "relative";
      cube.style.width = "" + (CUBIE_SIZE * 3) + "px";
      cube.style.height = "" + (CUBIE_SIZE * 3) + "px";
      cube.style.transformStyle = "preserve-3d";
      cube.style.transition = options.transition;

      for(var x=0; x<3; x++) {
        for(var y=0; y<3; y++) {
          for(var z=0; z<3; z++) {
            cube.appendChild(buildCubieContainer(x, y, z));
          }
        }
      }

      return cube;
    };

    function buildCubeWrapper() {
      var rx = RX;
      var ry = RY;
      var rz = RZ;

      var perspective = options.perspective;

      cubeWrapper = document.createElement("div");

      cubeWrapper.style.display = "flex";
      cubeWrapper.style.justifyContent = "center";
      cubeWrapper.style.alignItems = "center";
      cubeWrapper.style.height = (CONTAINER.offsetWidth) + "px";
      cubeWrapper.style.transformStyle = "preserve-3d";
      cubeWrapper.style.transform = "perspective(" + perspective + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(" + rz + "deg)";
      cubeWrapper.classList.add("cube-wrapper");

      var lastTouchX;
      var lastTouchY;
      var dragging;

      var handleTouchStart = function(e) {
        if(!e.cancelable) return;

        e.preventDefault();
        e.stopPropagation();

        dragging = true;
        lastTouchX = e.touches ? e.touches[0].clientX : e.clientX;
        lastTouchY = e.touches ? e.touches[0].clientY : e.clientY;
      }

      var handleTouchMove = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if(!dragging) return;

        var touchX = e.touches ? e.touches[0].clientX : e.clientX;
        var touchY = e.touches ? e.touches[0].clientY : e.clientY;

        var dx = touchX - lastTouchX;
        var dy = touchY - lastTouchY;

        ry += dx / 2;
        rx -= dy / 2;

        if(rx < -75) rx = -75;
        if(rx >  75) rx =  75;

        lastTouchX = e.touches ? e.touches[0].clientX : e.clientX;
        lastTouchY = e.touches ? e.touches[0].clientY : e.clientY;

        cubeWrapper.style.transform = "perspective(" + perspective + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(" + rz + "deg)";
      }

      var handleTouchEnd = function(e) {
        e.preventDefault();
        e.stopPropagation();

        dragging = false;
      }

      CONTAINER.addEventListener("touchstart", handleTouchStart, false);
      CONTAINER.addEventListener("touchmove", handleTouchMove, false);
      CONTAINER.addEventListener("touchend", handleTouchEnd, false);

      CONTAINER.addEventListener("mousedown", handleTouchStart, false);
      CONTAINER.addEventListener("mousemove", handleTouchMove, false);
      CONTAINER.addEventListener("mouseleave", handleTouchEnd, false);
      CONTAINER.addEventListener("mouseup", handleTouchEnd, false);

      return cubeWrapper;
    }

    function rotateEl(el, qts, axis, cb) {
      var transitionend = function() {
        cb();

        transitionWas = el.style.transition;
        el.style.transition = "none";
        el.style.transform = "";

        setTimeout(function() {
          el.style.transition = transitionWas;
        });

        el.removeEventListener("transitionend", transitionend, false);
      }

      el.addEventListener("transitionend", transitionend, false);

      var transform = "rotate" + axis + "(" + (qts / 4) + "turn)";
      el.style.transform = transform;
    }

    function rotateElX(el, qts, cb) {
      rotateEl(el, qts, "X", cb);
    }

    function rotateElY(el, qts, cb) {
      rotateEl(el, qts, "Y", cb);
    }

    function rotateElZ(el, qts, cb) {
      rotateEl(el, qts, "Z", cb);
    }

    var cube = buildCube();
    var cubeWrapper = buildCubeWrapper();

    cubeWrapper.appendChild(cube);
    CONTAINER.appendChild(cubeWrapper);

    this.el = cube;

    var cubieContainers = cube.querySelectorAll(".cubie-container");

    var ULB  = { el: cubieContainers[0]  };
    var UL   = { el: cubieContainers[1]  };
    var ULF  = { el: cubieContainers[2]  };
    var LB   = { el: cubieContainers[3]  };
    var L    = { el: cubieContainers[4]  };
    var LF   = { el: cubieContainers[5]  };
    var DLB  = { el: cubieContainers[6]  };
    var DL   = { el: cubieContainers[7]  };
    var DLF  = { el: cubieContainers[8]  };
    var UB   = { el: cubieContainers[9]  };
    var U    = { el: cubieContainers[10] };
    var UF   = { el: cubieContainers[11] };
    var B    = { el: cubieContainers[12] };
    var CORE = { el: cubieContainers[13] };
    var F    = { el: cubieContainers[14] };
    var DB   = { el: cubieContainers[15] };
    var D    = { el: cubieContainers[16] };
    var DF   = { el: cubieContainers[17] };
    var URB  = { el: cubieContainers[18] };
    var UR   = { el: cubieContainers[19] };
    var URF  = { el: cubieContainers[20] };
    var RB   = { el: cubieContainers[21] };
    var R    = { el: cubieContainers[22] };
    var RF   = { el: cubieContainers[23] };
    var DRB  = { el: cubieContainers[24] };
    var DR   = { el: cubieContainers[25] };
    var DRF  = { el: cubieContainers[26] };

    this.cubies = {
      ULB: ULB,
      UL: UL,
      ULF: ULF,
      LB: LB,
      L: L,
      LF: LF,
      DLB: DLB,
      DL: DL,
      DLF: DLF,
      UB: UB,
      U: U,
      UF: UF,
      B: B,
      CORE: CORE,
      F: F,
      DB: DB,
      D: D,
      DF: DF,
      URB: URB,
      UR: UR,
      URF: URF,
      RB: RB,
      R: R,
      RF: RF,
      DRB: DRB,
      DR: DR,
      DRF: DRF
    }

    Object.values(this.cubies).forEach(function(cc) {
      cc.stickers = {};

      cc.stickers.up    = cc.el.querySelector(".cubie .face.up .sticker");
      cc.stickers.down  = cc.el.querySelector(".cubie .face.down .sticker");
      cc.stickers.right = cc.el.querySelector(".cubie .face.right .sticker");
      cc.stickers.left  = cc.el.querySelector(".cubie .face.left .sticker");
      cc.stickers.front = cc.el.querySelector(".cubie .face.front .sticker");
      cc.stickers.back  = cc.el.querySelector(".cubie .face.back .sticker");

      if(!cc.stickers.up)    delete cc.stickers.up;
      if(!cc.stickers.down)  delete cc.stickers.down;
      if(!cc.stickers.right) delete cc.stickers.right;
      if(!cc.stickers.left)  delete cc.stickers.left;
      if(!cc.stickers.front) delete cc.stickers.front;
      if(!cc.stickers.back)  delete cc.stickers.back;
    });

    var USLICE = [
      ULB,
      UL,
      ULF,
      UB,
      U,
      UF,
      URB,
      UR,
      URF
    ];

    var DSLICE = [
      DLB,
      DL,
      DLF,
      DB,
      D,
      DF,
      DRB,
      DR,
      DRF
    ];

    var LSLICE = [
      ULB,
      UL,
      ULF,
      LB,
      L,
      LF,
      DLB,
      DL,
      DLF
    ];

    var RSLICE = [
      URB,
      UR,
      URF,
      RB,
      R,
      RF,
      DRB,
      DR,
      DRF
    ];

    var FSLICE = [
      ULF,
      LF,
      DLF,
      UF,
      F,
      DF,
      URF,
      RF,
      DRF
    ];

    var BSLICE = [
      ULB,
      LB,
      DLB,
      UB,
      B,
      DB,
      URB,
      RB,
      DRB
    ];

    var MSLICE = [
      CORE, U, F, D, B,
      UB, UF, DB, DF
    ];

    var ESLICE = [
      CORE, L, F, R, B,
      LF, LB, RF, RB
    ];

    var SSLICE = [
      CORE, U, R, D, L,
      UL, UR, DL, DR
    ];

    this.slices = {
      U: USLICE,
      D: DSLICE,
      R: RSLICE,
      L: LSLICE,
      F: FSLICE,
      B: BSLICE,
      M: MSLICE,
      E: ESLICE,
      S: SSLICE
    }

    function turnsToCycles(qts) {
      switch(qts) {
        case -1:
          return 3;
          break;
        case 1:
          return 1;
          break;
        case 2:
        case -2:
          return 2;
          break;
        default:
          throw `Invalid number of turns: ${qts}`;
          break;
      }
    }

    function turnMCallback(qts) {
      var cycles = turnsToCycles(-qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = U.stickers.up.style.backgroundColor;
        U.stickers.up.style.backgroundColor = F.stickers.front.style.backgroundColor;
        F.stickers.front.style.backgroundColor = D.stickers.down.style.backgroundColor;
        D.stickers.down.style.backgroundColor = B.stickers.back.style.backgroundColor;
        B.stickers.back.style.backgroundColor = tmp;

        tmp = UB.stickers.up.style.backgroundColor;
        UB.stickers.up.style.backgroundColor = UF.stickers.front.style.backgroundColor;
        UF.stickers.front.style.backgroundColor = DF.stickers.down.style.backgroundColor;
        DF.stickers.down.style.backgroundColor = DB.stickers.back.style.backgroundColor;
        DB.stickers.back.style.backgroundColor = tmp;

        tmp = UB.stickers.back.style.backgroundColor;
        UB.stickers.back.style.backgroundColor = UF.stickers.up.style.backgroundColor;
        UF.stickers.up.style.backgroundColor = DF.stickers.front.style.backgroundColor;
        DF.stickers.front.style.backgroundColor = DB.stickers.down.style.backgroundColor;
        DB.stickers.down.style.backgroundColor = tmp;
      }
    }

    function turnECallback(qts) {
      var cycles = turnsToCycles(-qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = F.stickers.front.style.backgroundColor;
        F.stickers.front.style.backgroundColor = R.stickers.right.style.backgroundColor;
        R.stickers.right.style.backgroundColor = B.stickers.back.style.backgroundColor;
        B.stickers.back.style.backgroundColor = L.stickers.left.style.backgroundColor;
        L.stickers.left.style.backgroundColor = tmp;

        tmp = LF.stickers.left.style.backgroundColor;
        LF.stickers.left.style.backgroundColor = RF.stickers.front.style.backgroundColor;
        RF.stickers.front.style.backgroundColor = RB.stickers.right.style.backgroundColor;
        RB.stickers.right.style.backgroundColor = LB.stickers.back.style.backgroundColor;
        LB.stickers.back.style.backgroundColor = tmp;

        tmp = LF.stickers.front.style.backgroundColor;
        LF.stickers.front.style.backgroundColor = RF.stickers.right.style.backgroundColor;
        RF.stickers.right.style.backgroundColor = RB.stickers.back.style.backgroundColor;
        RB.stickers.back.style.backgroundColor = LB.stickers.left.style.backgroundColor;
        LB.stickers.left.style.backgroundColor = tmp;
      }
    }

    function turnSCallback(qts) {
      var cycles = turnsToCycles(qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = U.stickers.up.style.backgroundColor;
        U.stickers.up.style.backgroundColor = L.stickers.left.style.backgroundColor;
        L.stickers.left.style.backgroundColor = D.stickers.down.style.backgroundColor;
        D.stickers.down.style.backgroundColor = R.stickers.right.style.backgroundColor;
        R.stickers.right.style.backgroundColor = tmp;

        tmp = UL.stickers.up.style.backgroundColor;
        UL.stickers.up.style.backgroundColor = DL.stickers.left.style.backgroundColor;
        DL.stickers.left.style.backgroundColor = DR.stickers.down.style.backgroundColor;
        DR.stickers.down.style.backgroundColor = UR.stickers.right.style.backgroundColor;
        UR.stickers.right.style.backgroundColor = tmp;

        tmp = UL.stickers.left.style.backgroundColor;
        UL.stickers.left.style.backgroundColor = DL.stickers.down.style.backgroundColor;
        DL.stickers.down.style.backgroundColor = DR.stickers.right.style.backgroundColor;
        DR.stickers.right.style.backgroundColor = UR.stickers.up.style.backgroundColor;
        UR.stickers.up.style.backgroundColor = tmp;
      }
    }

    function turnX(qts) {
      var cb = function() {
        turnLCallback(-qts);
        turnMCallback(-qts);
        turnRCallback( qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        rotateElX(cube, qts, cb);
      } else {
        cb();
      }
    }

    function turnY(qts) {
      var cb = function() {
        turnDCallback(-qts);
        turnECallback(-qts);
        turnUCallback( qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        rotateElY(cube, -qts, cb);
      } else {
        cb();
      }
    }

    function turnZ(qts) {
      var cb = function() {
        turnBCallback(-qts);
        turnSCallback( qts);
        turnFCallback( qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        rotateElZ(cube, qts, cb);
      } else {
        cb();
      }
    }

    function turnUCallback(qts) {
      var cycles = turnsToCycles(qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = ULB.stickers.up.style.backgroundColor;
        ULB.stickers.up.style.backgroundColor = ULF.stickers.up.style.backgroundColor;
        ULF.stickers.up.style.backgroundColor = URF.stickers.up.style.backgroundColor;
        URF.stickers.up.style.backgroundColor = URB.stickers.up.style.backgroundColor;
        URB.stickers.up.style.backgroundColor = tmp;

        tmp = ULB.stickers.left.style.backgroundColor;
        ULB.stickers.left.style.backgroundColor  = ULF.stickers.front.style.backgroundColor;
        ULF.stickers.front.style.backgroundColor = URF.stickers.right.style.backgroundColor;
        URF.stickers.right.style.backgroundColor = URB.stickers.back.style.backgroundColor;
        URB.stickers.back.style.backgroundColor  = tmp;

        tmp = ULB.stickers.back.style.backgroundColor;
        ULB.stickers.back.style.backgroundColor  = ULF.stickers.left.style.backgroundColor;
        ULF.stickers.left.style.backgroundColor  = URF.stickers.front.style.backgroundColor;
        URF.stickers.front.style.backgroundColor = URB.stickers.right.style.backgroundColor;
        URB.stickers.right.style.backgroundColor = tmp;

        tmp = UL.stickers.up.style.backgroundColor;
        UL.stickers.up.style.backgroundColor = UF.stickers.up.style.backgroundColor;
        UF.stickers.up.style.backgroundColor = UR.stickers.up.style.backgroundColor;
        UR.stickers.up.style.backgroundColor = UB.stickers.up.style.backgroundColor;
        UB.stickers.up.style.backgroundColor = tmp;

        tmp = UL.stickers.left.style.backgroundColor;
        UL.stickers.left.style.backgroundColor  = UF.stickers.front.style.backgroundColor;
        UF.stickers.front.style.backgroundColor = UR.stickers.right.style.backgroundColor;
        UR.stickers.right.style.backgroundColor = UB.stickers.back.style.backgroundColor;
        UB.stickers.back.style.backgroundColor  = tmp;
      }
    }

    function turnU(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnUCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        USLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnUw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnUCallback( qts);
        turnECallback(-qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        USLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, -qts, cb);
        });
        ESLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnDCallback(qts) {
      var cycles = turnsToCycles(-qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = DLB.stickers.down.style.backgroundColor;
        DLB.stickers.down.style.backgroundColor = DLF.stickers.down.style.backgroundColor;
        DLF.stickers.down.style.backgroundColor = DRF.stickers.down.style.backgroundColor;
        DRF.stickers.down.style.backgroundColor = DRB.stickers.down.style.backgroundColor;
        DRB.stickers.down.style.backgroundColor = tmp;

        tmp = DLB.stickers.left.style.backgroundColor;
        DLB.stickers.left.style.backgroundColor  = DLF.stickers.front.style.backgroundColor;
        DLF.stickers.front.style.backgroundColor = DRF.stickers.right.style.backgroundColor;
        DRF.stickers.right.style.backgroundColor = DRB.stickers.back.style.backgroundColor;
        DRB.stickers.back.style.backgroundColor  = tmp;

        tmp = DLB.stickers.back.style.backgroundColor;
        DLB.stickers.back.style.backgroundColor  = DLF.stickers.left.style.backgroundColor;
        DLF.stickers.left.style.backgroundColor  = DRF.stickers.front.style.backgroundColor;
        DRF.stickers.front.style.backgroundColor = DRB.stickers.right.style.backgroundColor;
        DRB.stickers.right.style.backgroundColor = tmp;

        tmp = DL.stickers.down.style.backgroundColor;
        DL.stickers.down.style.backgroundColor = DF.stickers.down.style.backgroundColor;
        DF.stickers.down.style.backgroundColor = DR.stickers.down.style.backgroundColor;
        DR.stickers.down.style.backgroundColor = DB.stickers.down.style.backgroundColor;
        DB.stickers.down.style.backgroundColor = tmp;

        tmp = DL.stickers.left.style.backgroundColor;
        DL.stickers.left.style.backgroundColor  = DF.stickers.front.style.backgroundColor;
        DF.stickers.front.style.backgroundColor = DR.stickers.right.style.backgroundColor;
        DR.stickers.right.style.backgroundColor = DB.stickers.back.style.backgroundColor;
        DB.stickers.back.style.backgroundColor  = tmp;
      }
    }

    function turnD(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnDCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        DSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnDw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnDCallback(qts);
        turnECallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        DSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, qts, cb);
        });
        ESLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnLCallback(qts) {
      var cycles = turnsToCycles(-qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = ULF.stickers.left.style.backgroundColor;
        ULF.stickers.left.style.backgroundColor = DLF.stickers.left.style.backgroundColor;
        DLF.stickers.left.style.backgroundColor = DLB.stickers.left.style.backgroundColor;
        DLB.stickers.left.style.backgroundColor = ULB.stickers.left.style.backgroundColor;
        ULB.stickers.left.style.backgroundColor = tmp;

        tmp = ULF.stickers.up.style.backgroundColor;
        ULF.stickers.up.style.backgroundColor    = DLF.stickers.front.style.backgroundColor;
        DLF.stickers.front.style.backgroundColor = DLB.stickers.down.style.backgroundColor;
        DLB.stickers.down.style.backgroundColor  = ULB.stickers.back.style.backgroundColor;
        ULB.stickers.back.style.backgroundColor  = tmp;

        tmp = ULF.stickers.front.style.backgroundColor;
        ULF.stickers.front.style.backgroundColor = DLF.stickers.down.style.backgroundColor;
        DLF.stickers.down.style.backgroundColor  = DLB.stickers.back.style.backgroundColor;
        DLB.stickers.back.style.backgroundColor  = ULB.stickers.up.style.backgroundColor;
        ULB.stickers.up.style.backgroundColor    = tmp;

        tmp = UL.stickers.left.style.backgroundColor;
        UL.stickers.left.style.backgroundColor = LF.stickers.left.style.backgroundColor;
        LF.stickers.left.style.backgroundColor = DL.stickers.left.style.backgroundColor;
        DL.stickers.left.style.backgroundColor = LB.stickers.left.style.backgroundColor;
        LB.stickers.left.style.backgroundColor = tmp;

        tmp = UL.stickers.up.style.backgroundColor;
        UL.stickers.up.style.backgroundColor    = LF.stickers.front.style.backgroundColor;
        LF.stickers.front.style.backgroundColor = DL.stickers.down.style.backgroundColor;
        DL.stickers.down.style.backgroundColor  = LB.stickers.back.style.backgroundColor;
        LB.stickers.back.style.backgroundColor  = tmp;
      }
    }

    function turnL(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnLCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        LSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnLw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnLCallback(qts);
        turnMCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        LSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, -qts, cb);
        });
        MSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnRCallback(qts) {
      var cycles = turnsToCycles(qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = URF.stickers.right.style.backgroundColor;
        URF.stickers.right.style.backgroundColor = DRF.stickers.right.style.backgroundColor;
        DRF.stickers.right.style.backgroundColor = DRB.stickers.right.style.backgroundColor;
        DRB.stickers.right.style.backgroundColor = URB.stickers.right.style.backgroundColor;
        URB.stickers.right.style.backgroundColor = tmp;

        tmp = URF.stickers.up.style.backgroundColor;
        URF.stickers.up.style.backgroundColor    = DRF.stickers.front.style.backgroundColor;
        DRF.stickers.front.style.backgroundColor = DRB.stickers.down.style.backgroundColor;
        DRB.stickers.down.style.backgroundColor  = URB.stickers.back.style.backgroundColor;
        URB.stickers.back.style.backgroundColor  = tmp;

        tmp = URF.stickers.front.style.backgroundColor;
        URF.stickers.front.style.backgroundColor = DRF.stickers.down.style.backgroundColor;
        DRF.stickers.down.style.backgroundColor  = DRB.stickers.back.style.backgroundColor;
        DRB.stickers.back.style.backgroundColor  = URB.stickers.up.style.backgroundColor;
        URB.stickers.up.style.backgroundColor    = tmp;

        tmp = UR.stickers.right.style.backgroundColor;
        UR.stickers.right.style.backgroundColor = RF.stickers.right.style.backgroundColor;
        RF.stickers.right.style.backgroundColor = DR.stickers.right.style.backgroundColor;
        DR.stickers.right.style.backgroundColor = RB.stickers.right.style.backgroundColor;
        RB.stickers.right.style.backgroundColor = tmp;

        tmp = UR.stickers.up.style.backgroundColor;
        UR.stickers.up.style.backgroundColor    = RF.stickers.front.style.backgroundColor;
        RF.stickers.front.style.backgroundColor = DR.stickers.down.style.backgroundColor;
        DR.stickers.down.style.backgroundColor  = RB.stickers.back.style.backgroundColor;
        RB.stickers.back.style.backgroundColor  = tmp;
      }
    }

    function turnM(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnMCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        MSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnE(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnECallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        ESLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElY(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnS(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnSCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        SSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnR(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnRCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        RSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnRw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnRCallback( qts);
        turnMCallback(-qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        RSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, qts, cb);
        });
        MSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElX(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnFCallback(qts) {
      var cycles = turnsToCycles(qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = ULF.stickers.front.style.backgroundColor;
        ULF.stickers.front.style.backgroundColor = DLF.stickers.front.style.backgroundColor;
        DLF.stickers.front.style.backgroundColor = DRF.stickers.front.style.backgroundColor;
        DRF.stickers.front.style.backgroundColor = URF.stickers.front.style.backgroundColor;
        URF.stickers.front.style.backgroundColor = tmp;

        tmp = ULF.stickers.up.style.backgroundColor;
        ULF.stickers.up.style.backgroundColor    = DLF.stickers.left.style.backgroundColor;
        DLF.stickers.left.style.backgroundColor  = DRF.stickers.down.style.backgroundColor;
        DRF.stickers.down.style.backgroundColor  = URF.stickers.right.style.backgroundColor;
        URF.stickers.right.style.backgroundColor = tmp;

        tmp = ULF.stickers.left.style.backgroundColor;
        ULF.stickers.left.style.backgroundColor  = DLF.stickers.down.style.backgroundColor;
        DLF.stickers.down.style.backgroundColor  = DRF.stickers.right.style.backgroundColor;
        DRF.stickers.right.style.backgroundColor = URF.stickers.up.style.backgroundColor;
        URF.stickers.up.style.backgroundColor    = tmp;

        tmp = UF.stickers.front.style.backgroundColor;
        UF.stickers.front.style.backgroundColor = LF.stickers.front.style.backgroundColor;
        LF.stickers.front.style.backgroundColor = DF.stickers.front.style.backgroundColor;
        DF.stickers.front.style.backgroundColor = RF.stickers.front.style.backgroundColor;
        RF.stickers.front.style.backgroundColor = tmp;

        tmp = UF.stickers.up.style.backgroundColor;
        UF.stickers.up.style.backgroundColor    = LF.stickers.left.style.backgroundColor;
        LF.stickers.left.style.backgroundColor  = DF.stickers.down.style.backgroundColor;
        DF.stickers.down.style.backgroundColor  = RF.stickers.right.style.backgroundColor;
        RF.stickers.right.style.backgroundColor = tmp;
      }
    }

    function turnF(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnFCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        FSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnFw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnFCallback(qts);
        turnSCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        FSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, qts, cb);
        });
        SSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnBCallback(qts) {
      var cycles = turnsToCycles(-qts);
      var tmp;

      for(var i=0; i<cycles; i++) {
        tmp = ULB.stickers.back.style.backgroundColor;
        ULB.stickers.back.style.backgroundColor = DLB.stickers.back.style.backgroundColor;
        DLB.stickers.back.style.backgroundColor = DRB.stickers.back.style.backgroundColor;
        DRB.stickers.back.style.backgroundColor = URB.stickers.back.style.backgroundColor;
        URB.stickers.back.style.backgroundColor = tmp;

        tmp = ULB.stickers.up.style.backgroundColor;
        ULB.stickers.up.style.backgroundColor    = DLB.stickers.left.style.backgroundColor;
        DLB.stickers.left.style.backgroundColor  = DRB.stickers.down.style.backgroundColor;
        DRB.stickers.down.style.backgroundColor  = URB.stickers.right.style.backgroundColor;
        URB.stickers.right.style.backgroundColor = tmp;

        tmp = ULB.stickers.left.style.backgroundColor;
        ULB.stickers.left.style.backgroundColor  = DLB.stickers.down.style.backgroundColor;
        DLB.stickers.down.style.backgroundColor  = DRB.stickers.right.style.backgroundColor;
        DRB.stickers.right.style.backgroundColor = URB.stickers.up.style.backgroundColor;
        URB.stickers.up.style.backgroundColor    = tmp;

        tmp = UB.stickers.back.style.backgroundColor;
        UB.stickers.back.style.backgroundColor = LB.stickers.back.style.backgroundColor;
        LB.stickers.back.style.backgroundColor = DB.stickers.back.style.backgroundColor;
        DB.stickers.back.style.backgroundColor = RB.stickers.back.style.backgroundColor;
        RB.stickers.back.style.backgroundColor = tmp;

        tmp = UB.stickers.up.style.backgroundColor;
        UB.stickers.up.style.backgroundColor    = LB.stickers.left.style.backgroundColor;
        LB.stickers.left.style.backgroundColor  = DB.stickers.down.style.backgroundColor;
        DB.stickers.down.style.backgroundColor  = RB.stickers.right.style.backgroundColor;
        RB.stickers.right.style.backgroundColor = tmp;
      }
    }

    function turnB(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnBCallback(qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        BSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    function turnBw(qts) {
      var remaining = 0;
      var cb = function() {
        if(--remaining !== 0) return;

        turnBCallback( qts);
        turnSCallback(-qts);

        turning = false;
        handleQueue();
      }

      if(animating) {
        BSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, -qts, cb);
        });
        SSLICE.forEach(function(cubieContainer) {
          remaining++;
          rotateElZ(cubieContainer.el, -qts, cb);
        });
      } else {
        remaining++;
        cb();
      }
    }

    var queue = [];
    var queueIdx = 0;
    var turning = false;
    var animating = true;
    var playing = true;

    function handleQueue() {
      if(turning) return;

      if(!playing) {
        ee.emit("turned");
        return;
      }

      if(queueIdx < queue.length) {
        turning = true;
        ee.emit("turning");

        var [turn, qts] = queue[queueIdx++];
        if(animating) {
          setTimeout(function() { turn(qts) });
        } else {
          turn(qts);
        }
      } else {
        ee.emit("turned");
        ee.emit("finish");
      }
    }

    function undo() {
      if(turning) return;
      if(playing) return;

      if(queueIdx > 0) {
        turning = true;
        ee.emit("turning");

        var [turn, qts] = queue[--queueIdx];
        if(animating) {
          setTimeout(function() { turn(-qts) });
        } else {
          turn(-qts);
        }
      }
    }

    var enqueue = function(turn, qts) {
      queue.push([turn, qts]);
      handleQueue();
    };

    var that = this;
    Object.entries({
      u:  turnU,
      r:  turnR,
      f:  turnF,
      d:  turnD,
      l:  turnL,
      b:  turnB,
      uw: turnUw,
      rw: turnRw,
      fw: turnFw,
      dw: turnDw,
      lw: turnLw,
      bw: turnBw,
      x:  turnX,
      y:  turnY,
      z:  turnZ,
      m:  turnM,
      e:  turnE,
      s:  turnS
    }).forEach(function([l, f]) {
      that[l]        = function() { enqueue(f,  1) }
      that[l + "2"]  = function() { enqueue(f,  2) }
      that[l + "i"]  = function() { enqueue(f, -1) }
      that[l + "2i"] = function() { enqueue(f, -2) }
    })

    this.withoutAnimation = function(cb) { var animatingWas = animating; animating = false; cb(); animating = animatingWas };
    this.pause = function() { playing = false; };
    this.play = function() { if(playing) return ; playing = true; handleQueue() };

    this.idx = function() { return queueIdx }
    this.undo = function() { undo() }
    this.playing = function() { return playing }
    this.turning = function() { return turning }

    this.on = function(e, cb) { ee.on(e, cb) };
  }

  window.CubeCSS = CubeCSS;
})();