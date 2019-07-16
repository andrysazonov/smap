import React from 'react'



export default class DropDown extends React.Component {

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Выбрать показатель
      </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="google.com">Показатель 1</a>
                    <a className="dropdown-item" href="google.com">Показатель 2</a>
                    <a className="dropdown-item" href="google.com">Показатель 3</a>
                </div>
            </div>
        )
    }
}