import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                console.log(data.products);
            })
            .catch((error) => {
                console.log('Error fetching products:' ,error);
            })
    }, [])
  return (
    <div>
        <h1>ProductList</h1>
    </div>
  )
}

export default ProductList