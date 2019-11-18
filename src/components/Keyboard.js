import React, { useState, useEffect } from 'react';
import './keyboard.css'
const Keyboard = () => {
    const whiteKeys = [
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'"
    ];
    const [keysDown, setKeysDown] = useState([]);


    useEffect(() => {
        window.onkeydown = (e) => {
            console.log(e, keysDown);
            if (keysDown.includes(e.key) === false) {
                console.log(1)
                setKeysDown([...keysDown, e.key])
            }
        }
        window.onkeyup = (e) => {
            if (keysDown.includes(e.key) === true) {
                setKeysDown(keysDown.filter(key => key !== e.key))
            }
        }
    });

    return <div className="keys">
        {whiteKeys.map((key =>

            <>
                <div className={`whiteKey ${keysDown.includes(key) ? 'active' : ''}`} key={key}>
                    {key}
                </div>
                <div className="blackKey">
                    {key}
                </div>
            </>
        ))}
        <pre>{JSON.stringify(keysDown)}</pre>
    </div>
}

export default Keyboard;