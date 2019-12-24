import React from 'react';
import createVirtualAudioGraph, {
  bufferSource,
  createNode,
  createWorkletNode,
  delay,
  gain,
  oscillator,
  stereoPanner,
} from 'virtual-audio-graph'

// VirtualAudioNodes.
const initialState = {
  outputGain: {
    gain: 0.3
  },
  osc1: {
    frequency: 440
  },
  lfo1: {
    frequency: 1
  }
}

const vag = createVirtualAudioGraph({
  // audioContext: window.audioCtx
});

const reducer = (params, state) => {
  console.log('ps', params, state)
  const nextState = {
    ...state,
    ...params
  }
  console.log('nextState params', nextState);

  vag.update({
    outputGain: gain('output', {
      gain: [
        ['linearRampToValueAtTime', 0, vag.currentTime + 1],
        ['linearRampToValueAtTime', nextState.outputGain.gain, vag.currentTime + 2]
      ]
    }),
    osc1: oscillator('outputGain', {
      frequency: nextState.osc1.frequency,
      stopTime: vag.currentTime + 2
    }),
  });
  console.log('reducer');
  return {
    ...state,
    ...params
  }
}

// window.vag = vag;

const VAGStateContext = React.createContext({
  vag: vag,
  state: initialState,
  update: reducer
});

export default VAGStateContext;