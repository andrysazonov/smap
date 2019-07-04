import React from 'react'
import { render } from 'react-dom'
import App from './components/App'


render(<App />, document.getElementById('root'))
var map = document.getElementById('map')
map.onmousedown= function (e) {
    var coords = getCoords(map);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    map.style.position = 'relative';
    moveAt(e);
    // document.body.appendChild(map);
    // map.style.zIndex = 1000;
    function moveAt(e) {
        console.log('scale = ',scale);
        map.style.left = e.pageX- shiftX*scale  +'px';
        map.style.top = e.pageY - shiftY**scale*scale  +'px';
    }
    document.onmousemove = function (e) {
        moveAt(e);
    }
    map.onmouseup = function () {
        document.onmousemove = null;
        map.onmouseup = null;
    }
}
map.ondragstart = function () {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top +window.pageYOffset,
        left: box.left+window.pageXOffset
    };
}


function addOnWheel(elem, handler) {
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", handler);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", handler);
      } else {
        // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
        elem.addEventListener("MozMousePixelScroll", handler);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", handler);
    }
  }

  var scale = 1;

  addOnWheel(map, function(e) {

    var delta = e.deltaY || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) scale += 0.05;
    else scale -= 0.05;

    map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ')';

    // отменим прокрутку
    e.preventDefault();
  });