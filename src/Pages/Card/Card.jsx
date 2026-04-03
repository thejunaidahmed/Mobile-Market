import React from 'react'
import './Card.css'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveCart } from '../../Redux/cartSLice';

function Card({name,price,image,id}) {
  const dispatch = useDispatch();

  const handleRemove = () => {
      dispatch(RemoveCart({ id }));
      alert("Product removed successfully ✔✔")
  };

  return (
      <div className='card'>
          <div className='left-card'>
              <img src={image} />
          </div>
          <div className='right-card'>
              <span>{name}</span>
              <span>{price}</span>
          </div>
          <button onClick={handleRemove}>Remove <MdDeleteForever/></button>
    </div>
  )
}

export default Card