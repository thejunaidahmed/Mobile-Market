import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import { AddCart } from '../../Redux/cartSLice'
import { NavLink } from 'react-router-dom'

function Product({ name, image, price, id, display, processor, protection, storage, gpu, rearCamera, frontCamera, battery }) {
   
  const dispatch = useDispatch()

  return (
    <>
      <div className='products'>
          <img src={image} />
          <span className='name'>{name}</span>
          <span className='price'>Rs: {price}</span>
          <div className='btn'>
            <NavLink to="/specification"><button>Specs</button></NavLink>
          <button onClick={() => dispatch(AddCart({
            name: name,
            image: image,
            id: id,
            price: price,
            display: display,
            processor: processor,
            protection: protection,
            storage: storage,
            gpu: gpu,
            rearCamera: rearCamera,
            frontCamera: frontCamera,
            battery: battery
          }),
          alert("Product added successfully ✔✔"))}>Add to Cart</button>
          </div>
          </div>
    </>
  )
}

export default Product