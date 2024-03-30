import React, { useState } from 'react';
import ModalComp from '../ModalComp/ModalComp';

export default function Modal() {
    const [display, setDisplay] = useState(false);

    const displayStateHandler = (val) => {
        setDisplay(val);
    }

    return (
        <div className='wrapper'>
            <h1>User Details Modal</h1>
            <button onClick={() => setDisplay(true)} className='btn-open-form'>Open Form</button>
            {display && <ModalComp displayHandler={displayStateHandler} />}
        </div>
    )
}