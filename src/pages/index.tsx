import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([]);
  const url = '/api/products';

  const fetchProducts = async () => {
    const req = await fetch(url);
    const data = await req.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="wrapper">
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <div className="row">
          {
            products.map(prd => (
              <div key={prd.id} className="col-md-4 col-lg-3 col-6 d-flex align-items-stretch mb-4">
                <ProductCard
                  id={prd.id}
                  title={prd.title}
                  image={prd.images[0]}
                  price={prd.price}
                  desc={prd.description}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home