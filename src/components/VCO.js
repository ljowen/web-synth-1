import React, { useState } from 'react';
import Dial from './Dial';

const VCO = () => <div>
  <pre>
    f
    <Dial></Dial>
  </pre>
  <label>
    gain
    <Dial></Dial>
  </label>
</div>

export default VCO;