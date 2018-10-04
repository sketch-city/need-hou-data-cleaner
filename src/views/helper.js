var m = require('mithril')


module.exports = {
	moveProgress,
	guid
};


function moveProgress(width, intervalStart, intervalEnd) {
    var elem = document.getElementById("myBar"); 
    var width = width;
    var id = setInterval(frame, intervalStart);
    function frame() {
        if (width >= intervalEnd) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
