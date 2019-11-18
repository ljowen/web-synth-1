import React, { useState } from 'react';

const Dial = () => {
  const [theta, setTheta] = useState(0);

  const y2 = 

  return <svg width="50" height="50"> <circle cx="25" cy="25" r="20" stroke="black" fill="transparent" strokeWidth="1" />
    <line x1="25" x2="50" y1="25" y2="150" stroke="black" strokeWidth="1" />
  </svg>

}

const VCO = () => <div>
  <Dial></Dial>
</div>

export default VCO;