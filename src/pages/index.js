import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Synth from '../components/Synth';
import SEO from "../components/seo";
import createVirtualAudioGraph, {
  createNode,
  delay,
  gain,
  oscillator,
  stereoPanner,
} from 'virtual-audio-graph';

import keyFreq from '../keys.js';

const vag = createVirtualAudioGraph();

const IndexPage = () => {
  const [currKeys, setKeys] = useState([]);

  useEffect(() => {
    window.onkeydown = (event) => {
      if (!currKeys.includes(event.key)) {
        setKeys([...currKeys, event.key]);
      }
      const { currentTime } = vag;
      console.log(event.key, keyFreq);
      vag.update({
        'amp': gain('output', { gain: 0.5 }),
        'vco': oscillator('amp', { frequency: keyFreq[event.key] }),
        'lfo-amp': gain({ destination: 'frequency', key: 'vco' }, { gain: 50 }),
        'lfo-osc': oscillator('lfo-amp', { frequency: 1 })
      })
    }
    window.onkeyup = (event) => {
      console.log('ku');
      vag.update({
        'amp': gain('output', { gain: 0 })
      })
      setKeys(currKeys.filter(key => key !== event.key));
    }
  })

  return (
    <>
      <pre>{JSON.stringify(currKeys)}</pre>
      <Synth />
    </>
  )
}

export default IndexPage
