import React from 'react'
import Place from '../Place';



export default class Drag extends React.Component {
    componentDidMount() {
        var map = document.getElementById('map')
        var drug = document.getElementById('drug');

        drug.onmousedown = function (e) {
            var coords = getCoords(drug);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;
            drug.style.position = 'relative';

            moveAt(e);

            // document.body.appendChild(map);
            // map.style.zIndex = 1000;
            function moveAt(e) {

                drug.style.left = e.pageX - shiftX - 23 + 'px';
                drug.style.top = e.pageY - shiftY - 63 - 38 + 'px';
            }
            document.onmousemove = function (e) {
                moveAt(e);
            }
            drug.onmouseup = function () {
                document.onmousemove = null;
                map.onmouseup = null;
                // map.style.zIndex = 1000;
                
            }
        }
        drug.ondragstart = function () {
            return false;
        };

        function getCoords(elem) {   // кроме IE8-
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset,
                left: box.left + window.pageXOffset
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



        addOnWheel(map, function (e) {

            var delta = e.deltaY || e.detail || e.wheelDelta;

            // отмасштабируем при помощи CSS
            if (delta < 0 && scale < 2) scale += 0.1;
            else if (scale > 0.4) scale -= 0.1;

            map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ')';

            // отменим прокрутку
            e.preventDefault();
        });

    }
    addOnWheel(e) {

        var map = document.getElementById('map')

        var delta = e.deltaY || e.detail || e.wheelDelta;
        var scale = map.style.scale
        console.log(map.style)
        // отмасштабируем при помощи CSS
        if (delta < 0 && scale < 2) scale += 0.1;
        else if (scale > 0.4) scale -= 0.1;
        map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ')';
        // отменим прокрутку
        e.preventDefault();
    };
    // onWheel={(e) => this.addOnWheel(e)}
    render = () => {
        return (
            <div className='karta'>
                <button id="minus" className="btn btn-danger" type="button">-</button>
                <button id="plus" className="btn btn-success" type="button">+</button>
                <div id='drug'>
                    <div id='map' className='map' onWheel={this.addOnWheel} >
                        <svg >
                            <Place />
                        </svg>
                        <img id='re' src='карта.jpg' alt='' />
                    </div>
                </div>

            </div>

        )
    }
    component
}
