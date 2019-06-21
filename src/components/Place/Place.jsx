import React from 'react'


function Place(props) {
    const path=props['path']
    console.log('---',props)
    const place = (
        <a href="google.com">
        <path className='place' d={path}>
        </path>
        </a>
        
    );
    return place ;
}
export default Place
