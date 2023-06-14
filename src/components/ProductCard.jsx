import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ( { product }) => {
  return (
    <div className={styles.cardWrapper + ' section'}>
        <div 
            className= {styles.imageWrapper}
            style={{backgroundImage : `url(${product.images[0]})`}}
        >
            
        </div>

        <div>
            <h2> { product.title}</h2>
            <p>{ product.description } </p>
            <p>Category : { product.category } </p>
            <p>Brand :{ product.brand } </p>
            <p>Price : EUR { product.price } </p>
        </div>
        <button className= {styles.actionBtn}>Details...</button>
    </div>
  )
}

export default ProductCard