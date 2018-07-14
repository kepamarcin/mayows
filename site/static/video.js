(function () {


  // if (document.readyState == 'interactive'){

    let width = window.innerWidth;

    // function loadVideo(width) {
    //   let node = document.getElementById("videoWrap");
    //   let video = document.createElement('video');
    //   node.childNodes[1].classList.add("fade-out");


    //   video.poster = "images/wave-poster.jpg";
    //   video.src = "video/wave" + width + ".mp4";
    //   // video.autoplay = true;
    //   video.muted = true;
    //   video.loop = true;
    //   video.setAttribute("playsinline", "");
    //   node.appendChild(video);
    //   node.childNodes[1].style.display = "none";
    //   let vid = document.querySelector("video");
    //   vid.pause();
    //   vid.play();
    // }

    // if (width >= 992 && width <= 1400) {
    //   loadVideo(720);
    // } else if (width > 1400) {
    //   loadVideo("");
    // }
  // }
      
  // var node = document.getElementById("videoWrap");
  // var video1 = document.createElement('video');
  // node.appendChild(video1);

  // var video = document.querySelector('video');

  var assetURL = "";

  if (width >= 992 && width <= 1400) {
    assetURL = 'video/wave1720.mp4';
  } else if (width > 1400) {
    assetURL = 'video/wave1.mp4';
  }
  if(width >= 992){
      var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
      if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
        var mediaSource = new MediaSource;
        var node = document.getElementById("videoWrap");
        var video1 = document.createElement('video');
        node.appendChild(video1);

        var video = document.querySelector('video');
      video.muted = true;
      video.loop = true;
      
        video.src = URL.createObjectURL(mediaSource);
        
          mediaSource.addEventListener('sourceopen', sourceOpen);
        
        
      } else {
        console.error('Unsupported MIME type or codec: ', mimeCodec);
      }
    }

      function sourceOpen (_) {

        var mediaSource = this;
        var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
        fetchAB(assetURL, function (buf) {
          sourceBuffer.addEventListener('updateend', function (_) {
            mediaSource.endOfStream();
            video.play();
            node.childNodes[1].style.display = "none";
          });
          sourceBuffer.appendBuffer(buf);
        });
      };

      function fetchAB (url, cb) {
        console.log(url);
        var xhr = new XMLHttpRequest;
        xhr.open('get', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
          cb(xhr.response);
        };
        xhr.send();
      };



})();
