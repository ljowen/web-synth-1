import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Synth from '../components/Synth';
import SEO from "../components/seo";

import keyFreq from '../data/keys.js';
import Keyboard from "../components/Keyboard";


const IndexPage = () => {
  const [currKeys, setKeys] = useState([]);


  return (
    <>
      <pre>{JSON.stringify(currKeys)}</pre>
      <Synth />
      <Keyboard onKey={setKeys} />
    </>
  )
}

export default IndexPage
