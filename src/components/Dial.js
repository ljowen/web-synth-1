import React, { useState, useEffect, useContext } from 'react';
import VirtualAudioContext from './VirtualAudioContext';
import { gain } from 'virtual-audio-graph';

const Dial = ({ theta = 0, radius = 25, ...props }) => {
	const cx = radius;
	const cy = radius;
	const x2 = cx + radius * Math.cos(Math.PI * theta);
	const y2 = cy + radius * Math.sin(Math.PI * theta);

	return <>
		<pre>{`${y2},${x2},${theta}`}</pre>
		<svg height={radius * 2} width={radius * 2} onClick={props.onClick}>
			<circle cx={cx} cy={cy} r={radius} stroke="black" strokeWidth="1" fill="transparent" />
			<line x1={cx} x2={x2} y1={cy} y2={y2} stroke="black" strokeWidth="1"> </line>
		</svg></>
}

const DialControl = () => {
	const [theta, setTheta] = useState(0);
	const { vag } = useContext(VirtualAudioContext);
	vag.update({
		0: gain('output', { gain: theta }),
	})

	return <div onWheel={(e) => { setTheta(theta + 0.001 * e.deltaY); e.stopPropagation(); return false; }
	} >
		<Dial theta={theta} radius={10} />
	</div >
}

export default DialControl;
