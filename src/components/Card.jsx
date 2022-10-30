/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';

function Card(product) {
  const { data } = product;

  const deleteProduct = async (id) => {
    try {
      return axios.delete(`http://localhost:3000/products/${id}`);
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center m-3 w-56">
      <p className="text-gray-800">{data.name}</p>
      <div className="flex flex-col my-6">
        <p className="text-gray-800">
          Preço:
          {' '}
          {data.price}
        </p>
        <p className="text-gray-800">
          Estoque:
          {' '}
          {data.stock}
        </p>
        <p className="text-gray-800">
          Descrição:
          {' '}
          {data.description}
        </p>
      </div>
      <div className="flex flex-row space-x-1">
        <button
          className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-green-400 hover:bg-green-300 rounded-md "
          type="button"
        >
          Editar
        </button>
        <button
          className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-red-400 hover:bg-red-300 rounded-md "
          type="button"
          onClick={() => deleteProduct(data._id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Card;
