import React from 'react';
import createVirtualAudioGraph, {
  createNode,
  delay,
  gain,
  oscillator,
  stereoPanner,
} from 'virtual-audio-graph';

// window.audioCtx = new AudioContext();
const vag = createVirtualAudioGraph({
  // audioContext: window.audioCtx
});
window.vag = vag;
const VirtualAudioContext = React.createContext({
  vag: vag
});

export default VirtualAudioContext;