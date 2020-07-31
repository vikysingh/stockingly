import React from 'react';
import "./HeadingButtonStyle.css"

function HeadingButton(props) {
    const { text, id, handler } = props
    return (
        <button className="heading_button" id={id}
        onClick={e => handler(e)}
        >
            { text }
        </button>
    );
}

export default HeadingButton;