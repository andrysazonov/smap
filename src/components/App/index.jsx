import React, { Fragment } from 'react'
// import Place from '../Place'
import Drag from '../Drag'
import DropDown from '../dropdown'

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <DropDown/>
                <Drag />
            </Fragment>
        )
    }
}