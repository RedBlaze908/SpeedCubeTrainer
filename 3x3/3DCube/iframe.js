(function() {
  var urlParams = new URLSearchParams(window.location.search);

  var seq = [];
  if(urlParams.has("seq")) {
    urlParams.get("seq").split(",").forEach(function(m) {
      if(m === "scramble") {
        for(var i=0; i<50; i++) {
          var randomMove = ["U", "R", "F", "B", "L", "D"][Math.floor(Math.random() * 6)];
          randomMove += ["2", "i", ""][Math.floor(Math.random() * 3)];
          seq.push(randomMove);
        }
      } else {
        seq.push(m);
      }
    });
  }

  var preseq = [];
  if(urlParams.has("preseq")) {
    urlParams.get("preseq").split(",").forEach(function(m) {
      if(m === "qes") {
        for(var i=seq.length-1; i>=0; i--) {
          preseq.push(seq[i], seq[i], seq[i]);
        }
      } else if(m === "scramble") {
        for(var i=0; i<50; i++) {
          var randomMove = ["U", "R", "F", "B", "L", "D"][Math.floor(Math.random() * 6)];
          randomMove += ["2", "i", ""][Math.floor(Math.random() * 3)];
          preseq.push(randomMove);
        }
      } else {
        preseq.push(m);
      }
    });
  }

  var stickerless = [];
  if(urlParams.has("stickerless")) {
    stickerless = urlParams.get("stickerless").split(",")
  }

  var colorUp    = urlParams.get("clru");
  var colorDown  = urlParams.get("clrd");
  var colorLeft  = urlParams.get("clrl");
  var colorRight = urlParams.get("clrr");
  var colorFront = urlParams.get("clrf");
  var colorBack  = urlParams.get("clrb");

  var colorPlastic = urlParams.get("clrp");

  var colorStickerless = urlParams.get("clrx") || "#777";

  var options = {
    container: document.querySelector(".cube-container"),
    colorUp: colorUp,
    colorDown: colorDown,
    colorRight: colorRight,
    colorLeft: colorLeft,
    colorFront: colorFront,
    colorBack: colorBack,
    colorPlastic: colorPlastic
  }

  if(urlParams.has("cs")) options.cubieSize = urlParams.get("cs");
  if(urlParams.has("rx")) options.rx = urlParams.get("rx");
  if(urlParams.has("ry")) options.ry = urlParams.get("ry");
  if(urlParams.has("rz")) options.rz = urlParams.get("rz");

  if(urlParams.has("transition")) options.transition = urlParams.get("transition");
  if(urlParams.has("perspective")) options.perspective = urlParams.get("perspective");

  var cubeCSS = new CubeCSS(options);
  var hideControlsTimeout;
  var doNotShowControlsTimeout;
  var ignoreShowControls = false;

  function hideControls() {
    if(hideControlsTimeout) clearTimeout(hideControlsTimeout);

    document.querySelector(".controls").style.display = "none";
  }

  function showControls() {
    if(hideControlsTimeout) clearTimeout(hideControlsTimeout);

    document.querySelector(".controls").style.display = "flex";
  }

  function showControlsForAWhile() {
    showControls();

    hideControlsTimeout = setTimeout(function() {
      document.querySelector(".controls").style.display = "none";
    }, 1500);
  }

  function doNotShowControlsForAWhile() {
    if(doNotShowControlsTimeout) clearTimeout(doNotShowControlsTimeout);

    ignoreShowControls = true;

    doNotShowControlsTimeout = setTimeout(function() {
      ignoreShowControls = false;
    }, 750);
  }

  cubeCSS.on("turning", function() {
    document.querySelector("button.replay").style.display = "none";
    document.querySelector("button.play").style.display = "none";
    document.querySelector("button.pause").style.display = "inline";
  });
  cubeCSS.on("turned", function() {
    document.querySelector("button.replay").style.display = "none";
    document.querySelector("button.play").style.display = "inline";
    document.querySelector("button.pause").style.display = "none";
  });
  cubeCSS.on("finish", function() {
    document.querySelector("button.replay").style.display = "inline";
    document.querySelector("button.play").style.display = "none";
    document.querySelector("button.pause").style.display = "none";
  });

  window.cubeCSS = cubeCSS;

  function performMove(move) {
    var l = move
      .replace("u", "uw")
      .replace("r", "rw")
      .replace("f", "fw")
      .replace("d", "dw")
      .replace("l", "lw")
      .replace("b", "bw")
      .replace("'", "i")
      .toLowerCase();
    var f = cubeCSS[l];

    if(f) {
      f();
    } else {
      console.log("Invalid movement", move);
    }
  }

  cubeCSS.withoutAnimation(function() {
    preseq.forEach(function(move) {
      performMove(move);
    });

    cubeCSS.pause();

    stickerless.forEach(function(cubie) {
      var c = cubeCSS.cubies[cubie];

      if(c) {
        Object.values(c.stickers).forEach(function(s) {
          s.style.backgroundColor = colorStickerless;
        });
      } else {
        c = cubeCSS.cubies[cubie.slice(0, -1)];

        if(c) {
          switch(cubie.slice(-1)) {
            case "U":
              c.stickers.up.style.backgroundColor = colorStickerless;
              break;
            case "R":
              c.stickers.right.style.backgroundColor = colorStickerless;
              break;
            case "F":
              c.stickers.front.style.backgroundColor = colorStickerless;
              break;
            case "D":
              c.stickers.down.style.backgroundColor = colorStickerless;
              break;
            case "L":
              c.stickers.left.style.backgroundColor = colorStickerless;
              break;
            case "B":
              c.stickers.back.style.backgroundColor = colorStickerless;
              break;
            default:
              console.log("Invalid stickerless cubie", cubie);
              break;
          }
        } else {
         console.log("Invalid stickerless cubie", cubie);
        }
      }
    });

    seq.forEach(function(move) {
      performMove(move);
    });
  });

  var dragging = false;

  function handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();

    dragging = true;
  }

  function handleMouseMove(e) {
    e.preventDefault();
    e.stopPropagation();

    if(dragging) {
      hideControls();
      doNotShowControlsForAWhile();
    } else if(!ignoreShowControls) {
      showControlsForAWhile();
    }
  }

  function handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    dragging = false;
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    e.stopPropagation();

    dragging = false;
  }

  var touchmoved = 0;

  function handleTouchStart(e) {
    e.preventDefault();
    e.stopPropagation();

    touchmoved = 0;
  }

  function handleTouchMove(e) {
    e.preventDefault();
    e.stopPropagation();

    touchmoved++;

    if(touchmoved > 5) {
      hideControls();
      doNotShowControlsForAWhile();
    }
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    e.stopPropagation();

    // TODO play with this value? Use offsets instead? Make the same for mousemove?
    if(touchmoved <= 3) {
      showControlsForAWhile();
    }
  }

  hideControls();

  options.container.addEventListener("touchstart", handleTouchStart);
  options.container.addEventListener("touchmove", handleTouchMove);
  options.container.addEventListener("touchend", handleTouchEnd);
  options.container.addEventListener("mousedown", handleMouseDown);
  options.container.addEventListener("mousemove", handleMouseMove);
  options.container.addEventListener("mouseup", handleMouseUp);
  options.container.addEventListener("mouseleave", handleMouseLeave);

  function handleReplayClick(e) {
    e.preventDefault();
    e.stopPropagation();

    touchmoved = 999999;
    hideControls();
    doNotShowControlsForAWhile();

    if(cubeCSS.turning()) return;

    cubeCSS.pause();

    cubeCSS.withoutAnimation(function() {
      while(cubeCSS.idx() > preseq.length) {
        cubeCSS.undo();
      }
    })

    cubeCSS.play();
  }

  function handlePlayClick(e) {
    e.preventDefault();
    e.stopPropagation();

    touchmoved = 999999;
    hideControls();
    doNotShowControlsForAWhile();

    cubeCSS.play();
  }

  function handlePauseClick(e) {
    e.preventDefault();
    e.stopPropagation();

    showControlsForAWhile();

    document.querySelector("button.play").style.display = "inline";
    document.querySelector("button.pause").style.display = "none";

    cubeCSS.pause();
  }

  function handleResetClick(e) {
    e.preventDefault();
    e.stopPropagation();

    showControlsForAWhile();

    if(cubeCSS.turning()) return;

    cubeCSS.pause();

    cubeCSS.withoutAnimation(function() {
      while(cubeCSS.idx() > preseq.length) {
        cubeCSS.undo();
      }
    })
  }

  function handleStepBackwardClick(e) {
    e.preventDefault();
    e.stopPropagation();

    showControlsForAWhile();

    if(cubeCSS.turning()) return;
    if(cubeCSS.idx() <= preseq.length) return;

    cubeCSS.pause();
    cubeCSS.undo();
  }

  function handleStepForwardClick(e) {
    e.preventDefault();
    e.stopPropagation();

    showControlsForAWhile();

    cubeCSS.play();
    cubeCSS.pause();
  }

  function handleFinishClick(e) {
    e.preventDefault();
    e.stopPropagation();

    showControlsForAWhile();

    cubeCSS.withoutAnimation(function() {
      cubeCSS.play();
    });
  }

  document.querySelector("button.replay").addEventListener("click", handleReplayClick, false);
  document.querySelector("button.replay").addEventListener("touchstart", handleReplayClick, false);

  document.querySelector("button.play").addEventListener("click", handlePlayClick, false);
  document.querySelector("button.play").addEventListener("touchstart", handlePlayClick, false);

  document.querySelector("button.pause").addEventListener("click", handlePauseClick, false);
  document.querySelector("button.pause").addEventListener("touchstart", handlePauseClick, false);

  document.querySelector("button.reset").addEventListener("click", handleResetClick, false);
  document.querySelector("button.reset").addEventListener("touchstart", handleResetClick, false);

  document.querySelector("button.step-backward").addEventListener("click", handleStepBackwardClick, false);
  document.querySelector("button.step-backward").addEventListener("touchstart", handleStepBackwardClick, false);

  document.querySelector("button.step-forward").addEventListener("click", handleStepForwardClick, false);
  document.querySelector("button.step-forward").addEventListener("touchstart", handleStepForwardClick, false);

  document.querySelector("button.finish").addEventListener("click", handleFinishClick, false);
  document.querySelector("button.finish").addEventListener("touchstart", handleFinishClick, false);
})();