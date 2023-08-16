import React from 'react';


function Test ({ closeModal }) {
    return (
        <div className="test">
            <h2>Test</h2>
            <p>Sanchir</p>
            <p>nas:19</p>
            <button onClick={closeModal}>Close</button>
        </div>
    );
}

export default Test;