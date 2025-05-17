import { FaHeart } from "react-icons/fa";

const ProductCard = ({product,onToggleSaved}) => {

  return (
    <div className="product-card">
        <FaHeart className={`heart ${product.saved ?'red-heart' : ''}`} onClick={()=>onToggleSaved(product.id)}/>
        <div className="price">
            <h3>{product.price} $</h3>
            
        </div>
        
        <img src={product.image} alt="" />
        
        <div className="title-container">
            <h2>{product.title}</h2>
        </div>
    </div>
  )
}

export default ProductCard
