import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const router = useRouter()
    const { id } = router.query;
    const url = '/api/products';

    const fetchProduct = async () => {
        const req = await fetch(`${url}`);
        const data = await req.json();

        setProduct(data.find(item => item.id === id));
    }

    console.log(product)

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <section className="pd_full">
            {/* <div className="container">
                <div className="card">
                    <img src='' alt={title} className="card-img" />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <span className="card_price card-title">${price}</span>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default ProductDetails