import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Card from '../components/Card';

function Home() {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3000/products';

  const getProducts = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
      return products;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center flex-row flex-wrap">
        {
          products.map((product) => <Card key={product.id} data={product} />)
        }
      </div>
    </div>
  );
}

export default Home;
