import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/css/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';

import Marketplace from './pages/Marketplace';

import Home from './pages/Landing/IndexLanding';

import NoPage from './pages/NoPage';

import NftMe from './components/nft/Me';
import NftSell from './components/nft/Sell';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="/marketplace/me" element={<NftMe />} />
        <Route path="/marketplace/sell" element={<NftSell />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
