import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const url = 'http://localhost:3000/products';

  const postProduct = async () => {
    try {
      return axios.post(url, {
        name: productName,
        price: productPrice,
        stock: productStock,
        description: productDescription,
      });
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center flex-row flex-wrap">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center m-3 w-56">
          <p className="text-gray-800">Preencha os campos</p>
          <form className="flex flex-col my-6">
            <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Nome
              <input
                type="text"
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Café"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Preço
              <input
                type="text"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500"
                placeholder="7,50"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </label>
            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Estoque
              <input
                type="text"
                id="stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500"
                placeholder="200"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
              />
            </label>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Descrição
              <input
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Requisito mínimo de todo desenvolvedor"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </label>
            <div className="flex flex-row justify-center space-x-1">
              <button
                className=" mt-6 block w-full p-2.5text-xs tracking-wide text-white transition-colors duration-200 transform bg-green-400 hover:bg-green-300 rounded-md "
                type="button"
                onClick={postProduct}
              >
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
