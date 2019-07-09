import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/index'
import './style.css'
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.isOpen = this.props.isOpen;
        // console.log(props)
        // { title, isOpen, onCancel, onSubmit, children }
        

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
        // onClose: () => { },
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
                {/* {console.log(this.isOpen)} */}
                {/* {console.log('1',this.state)} */}
                {this.props.isOpen &&
                    <Portal>
                        <div className='modalOverlay'>
                            <div className='modalWindow' >
                                <div className='modalHeader'>
                                    <button type="button" className="close" onClick={this.props.onClose} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="modalTitle">{this.title}</div>
                                </div>
                                <div className='modalBody'>
                                    Information About employee
                        </div>
                                <div className='modalFooter'>
                                    Also information
                        </div>
                            </div>
                        </div>
                    </Portal>
                }
            </>
        );
    };
}