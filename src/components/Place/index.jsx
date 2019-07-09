import React from 'react'
import Modal from '../Modal/index';
// import { placeholder } from '@babel/types';


export default class Place extends React.Component {
    state = {
        isOpen: false,
    }
    listOfPlace = [
        "m 119.50259,268.38487 38.87866,0.17916 0.17916,23.82886 h -39.05782 z",
        "m 158.56041,268.11612 39.05782,0.35833 0.17916,23.82885 -39.23698,-0.53749 z",
        "m 197.63374,268.63255 h 38.76662 v 23.8174 l -39.02,0.25337 z",
        "m 158.36037,292.70332 v 23.56402 l -39.27337,-0.25337 -0.25338,-23.8174 z",
        "m 158.36037,292.9567 39.01999,0.25338 0.25338,23.31064 h -39.01999 z",
        "m 197.12699,292.19657 38.76661,-0.25338 0.25338,24.32415 -39.01999,-0.25337 z",
        "m 236.14698,292.70332 39.27337,-0.25337 -0.25337,23.81739 -38.51325,-0.25337 z",
        "m 275.16698,292.19657 39.01999,0.50675 0.76013,24.07078 -39.27337,-0.50676 z"
    ]

    handleClick = () => {
        this.setState({ isOpen: true });
        
        console.log('tick');

    }
    handleCancel = (e) => {
        this.setState({ isOpen: false });
        
        console.log('pick');

    }

    render() {
        
        const list = this.listOfPlace.map((name, i) => {
            return (
                <path key={i} className='place' onClick={this.handleClick} d={name}>
                   
                </path>
            )
        })
        
        list.push(<Modal key={list.length+1} isOpen={this.state.isOpen} onClose={this.handleCancel}/>)
        return list


    }
}
