import React from 'react';
// props
// state
// children

const Scroll = (props) => {
    console.log(props);
    return (
        <div style={{ overflow: 'scroll', border: '1px solid black', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll