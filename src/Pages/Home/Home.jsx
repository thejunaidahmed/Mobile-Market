import React, { useState } from 'react'
import './Home.css'
import { category } from '../../category'
import Product from '../Product/Product'
import { products } from '../../Products'

function Home() {

    const [showProducts, setshowProducts] = useState(products)

    const showProductItems = (category) => {
        const updateProduct = products.filter((items) => (
            items.category === category
        ))
        setshowProducts(updateProduct)
    }

  return (
      <div className='home'>
          <div className='category'>
              {category.slice(0,6).map((items, index) => (
                  <div key={index} className='category-items' onClick={() => showProductItems(items.name)}>
                      <img src={items.image} />
                  </div>
              ))}
          </div>

          <h1>Trending Phones</h1>

          <div className='item'>
              {showProducts.slice(0,8).map((items) => {
                  return <div className='product-item' key={items.id}>
                      <Product 
                        key={items.id} 
                        name={items.name} 
                        price={items.price} 
                        image={items.image} 
                        id={items.id}
                        display={items.display}
                        processor={items.processor}
                        protection={items.protection}
                        storage={items.storage}
                        gpu={items.gpu}
                        rearCamera={items.rearCamera}
                        frontCamera={items.frontCamera}
                        battery={items.battery}
                      />
                  </div>
              })}
          </div>
      </div>
  )
}

export default Home