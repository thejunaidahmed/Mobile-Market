import  React , {useState} from 'react'
import './Shop.css'
import { FaShopify } from "react-icons/fa6";
import { products } from '../../Products';
import { category } from '../../category';
import Product from '../Product/Product';

function Shop() {

  const [showProducts, setshowProducts] = useState(products)

  const showProductItems = (category) => {
    if (category === "All") {
      setshowProducts(products)
    } else {
      const updateProduct = products.filter((items) => (
        items.category === category
      ))
      setshowProducts(updateProduct)
    }
  }

  return (
    <div className='shop'>
      <div className='category'>
              {category.map((items, index) => (
                  <div key={index} className='category-items' onClick={() => showProductItems(items.name)}>
                      <img src={items.image} />
                  </div>
              ))}
          </div>

          <h1>Trending Phones</h1>

          <div className='item'>
              {showProducts.map((items) => {
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

export default Shop