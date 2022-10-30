import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="w-full px-32 h-12 flex items-center justify-between bg-white border-b border-gray-200">
      <header className="flex items-center">
        <div>
          <div className="ml-10 mr-52 flex place-items-baseline space-x-4">
            <Link to="/">
              <p className="text-sm text-gray-800 p-6">Lista de Produtos</p>
            </Link>
            <Link to="/product">
              <button
                className=" px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-green-400 hover:bg-green-300 rounded-md "
                type="button"
              >
                Criar Produto
              </button>
            </Link>
          </div>
        </div>
        {/* Logo
        <div className="flex-shrink-0">
        </div> */}
      </header>
    </nav>
  );
}

export default Nav;
