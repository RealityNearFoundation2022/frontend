import 'regenerator-runtime/runtime'
import React from 'react'

import './assets/css/global.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Marketplace from "./pages/Marketplace";

import Home from "./pages/Home";

import NoPage from "./pages/NoPage";

import NftMe from "./components/nft/Me";
import NftSell from './components/nft/Sell';

import About from './pages/About';
import Contact from './pages/Contact';
import Metaverso from './pages/Metaverso';

export default function App() {
  // use React Hooks to store greeting in component state
  //const [greeting, setGreeting] = React.useState()

  // when the user has not yet interacted with the form, disable the button
  //const [buttonDisabled, setButtonDisabled] = React.useState(true)

  // after submitting the form, we want to show Notification
  //const [showNotification, setShowNotification] = React.useState(false)

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  // React.useEffect(
  //   () => {
  //     // get_greeting is in near/utils.js
  //     get_greeting()
  //       .then(greetingFromContract => {
  //         setGreeting(greetingFromContract)
  //       })
  //   },
// 
  //   // The second argument to useEffect tells React when to re-run the effect
  //   // Use an empty array to specify "only run on first render"
  //   // This works because signing into NEAR Wallet reloads the page
  //   []
  // )

  // if not signed in, return early with sign-in prompt
  //if (!window.walletConnection.isSignedIn()) {
    return (
 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="/marketplace/me" element={<NftMe />} />
          <Route path="/marketplace/sell" element={<NftSell />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metaverso" element={<Metaverso />} />
        </Route>
      </Routes>

  
    )
  }



