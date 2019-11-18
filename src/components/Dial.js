import React, { useState, useEffect } from 'react';

const Dial = ({ theta = 0, ...props }) => {
	const cx = 50;
	const cy = 50;
	const r = 50;
	const x2 = cx + r * Math.cos(Math.PI * theta);
	const y2 = cy + r * Math.sin(Math.PI * theta)
	return <>
		<pre>{`${y2},${x2},${theta}`}</pre>
		<svg height="100" width="100" onClick={props.onClick}>
			<circle cx="50" cy="50" r="50" stroke="black" strokeWidth="1" fill="transparent" />
			<line x1="50" x2={x2} y1="50" y2={y2} stroke="black" strokeWidth="1"> </line>
		</svg></>
}

const DialControl = () => {
	const [theta, setTheta] = useState(0);

	return <div onWheel={(e) => setTheta(theta + 0.001 * e.deltaY)} >
		<Dial theta={theta} />
	</div>
}

export default DialControl;
