import React from 'react'
import Place from '../Place';

export default class Drag extends React.Component {
    
    addOnWheel(e) {
        
        var map = document.getElementById('map')
        console.log(map.style.scale)
        
        var delta = e.deltaY || e.detail || e.wheelDelta;
        // отмасштабируем при помощи CSS
        if (delta < 0 && this.scale < 2) this.scale += 0.1;
        else if (this.scale > 0.4) this.scale -= 0.1;
        map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + this.scale + ')';
        // отменим прокрутку
        e.preventDefault(e);
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
}