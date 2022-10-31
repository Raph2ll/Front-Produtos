import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<CreateProduct />} />
      <Route path="/product/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default Router;
