import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/index'
import './style.css'
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.isOpen = props.isOpen;
        console.log(props)
        // { title, isOpen, onCancel, onSubmit, children }
        // this.state={
        //     isOpen:this.isOpen
        // };

    }
    
    static propTypes = {

        // title: PropTypes.string,
        isOpen: PropTypes.bool,
        // onCancel: PropTypes.func,
        // onSubmit: PropTypes.func,
        // children: PropTypes.node,

    }
    static defaultProps = {
        // title: 'Modal title',
        isOpen: false,
        // onCancel: () => { },
        // onSubmit: () => { },
        // children: null,
    }
    // onClose=()=>{
    //     this.setState({ isOpen: false });
    //     console.log('pick')
    // }

    render() {
        return (
            <>
                {console.log(this.props)}
                {console.log('1',this.isOpen)}
                {this.isOpen &&
                    <Portal>
                        <div className='modalOverlay'>
                            <div className='modalWindow'>
                                <div className='modalHeader'>
                                    <button type="button" className="close" onClick={this.onClose} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="modalTitle">{this.title}</div>
                                </div>
                                <div className='modalBody'>
                                    QQQQQQQQQQ
                        </div>
                                <div className='modalFooter'>
                                    QQQQQQQQQQ
                        </div>
                            </div>
                        </div>
                    </Portal>
                }
            </>
        );
    };
}