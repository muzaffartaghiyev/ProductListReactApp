import React, { useState } from 'react'

import { FaHeart } from "react-icons/fa";

const ProductCard = ({product}) => {

    const [prod, setProd] = useState(product)

  return (
    <div className="product-card">
        <FaHeart className={`heart ${prod.saved ?'red-heart' : ''}`} onClick={()=>setProd({...prod,saved:!prod.saved})}/>
        <div className="price">
            <h3>{prod.price} $</h3>
            
        </div>
        
        <img src={prod.image} alt="" />
        
        <div className="title-container">
            <h2>{prod.title}</h2>
        </div>
    </div>
  )
}

export default ProductCard
