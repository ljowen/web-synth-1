import React, { useState, useEffect, useContext, getCurrentTime } from 'react';
import { gain, oscillator } from 'virtual-audio-graph';
import VirtualAudioContext from './VirtualAudioContext';
import './keyboard.css';

import keyFreqs from '../data/keys';

const Keyboard = ({ onKeyDown }) => {
    const [keysDown, setKeysDown] = useState([]);
    const { vag } = useContext(VirtualAudioContext);

    useEffect(() => {
        window.onkeydown = (e) => {
            const notePressed = keyFreqs.find(k => k.key === e.key);
            if (!notePressed) {
                return;
            }
            vag.update({
                0: gain('output', { gain: 0.3 }),
                1: oscillator(0, {
                    frequency: notePressed.freq,
                    stopTime: vag.currentTime + 1
                }),
            });
            console.log(e, keysDown);
            if (keysDown.includes(e.key) === false) {
                console.log(1)
                setKeysDown([...keysDown, e.key]);
            }
        }
        window.onkeyup = (e) => {
            if (keysDown.includes(e.key) === true) {
                setKeysDown(keysDown.filter(key => key !== e.key))
            }
        }
    });
    return <div className="keys">
        {keyFreqs.map((key =>
            <>
                <div className={`whiteKey ${keysDown.includes(key) ? 'active' : ''}`} key={key}>
                    {key.key}
                </div>
            </>
        ))}
        <pre>{JSON.stringify(keyFreqs)}</pre>
        <pre>{JSON.stringify(keysDown)}</pre>
    </div>
}

export default Keyboard;