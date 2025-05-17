import "./ProductsContainer.scss"

import ProductCard from "./ProductCard"
import { useState } from "react"

const ProductsContainer = ({productsData,searchInput,searchCategory}) => {
  const [products, setProducts] = useState(productsData)

  const handleToggleSaved = (id)=>{
    setProducts(products.map((product)=>product.id===id?{...product,saved:!product.saved}:product))
  }

  const searchedProducts = products.filter((product)=>
      product.title.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
  )

  const filteredData = searchedProducts.filter((product)=>
    searchCategory=='all' ? product : product.category.toLowerCase().startsWith(searchCategory.toLowerCase())
  )

  return (
    <div className='products-container'>
        {filteredData.map((product)=>
        <ProductCard product={product} onToggleSaved={handleToggleSaved} key={product.id}/>
        )}
    </div>
  )
}

export default ProductsContainer

