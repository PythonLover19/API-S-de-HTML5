
(function localFileVideoPlayer() {
  'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
                                                    var element = document.querySelector('#message')
                                                    element.innerHTML = message
                                                    element.className = isError ? 'error' : 'info'
                                                  }
  var playSelectedFile = function (event) { 

                                                var file = this.files[0]
                                                var type = file.type
                                                var videoNode = document.querySelector('video')
                                                var canPlay = videoNode.canPlayType(type)
                                                if (canPlay === '') canPlay = 'No'
                                                var message = canPlay + ' '+ 'puede dar play "' + type + '" ' 
                                                var isError = canPlay === 'No'
                                                displayMessage(message, isError)

                                                if (isError) {
                                                  return
                                                }

                                                var fileURL = URL.createObjectURL(file)
                                                videoNode.src = fileURL
                                              }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})()




var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

