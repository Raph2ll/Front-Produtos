import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<CreateProduct />} />
    </Routes>
  );
}

export default Router;
