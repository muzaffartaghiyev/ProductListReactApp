import "./ProductsContainer.scss"

import ProductCard from "./ProductCard"

const ProductsContainer = ({productsData,searchInput,searchCategory}) => {

  const searchedProducts = productsData.filter((product)=>
      product.title.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
  )

  const filteredData = searchedProducts.filter((product)=>
    searchCategory=='all' ? product : product.category.toLowerCase().startsWith(searchCategory.toLowerCase())
  )

  return (
    <div className='products-container'>
        {filteredData.map((product)=>
          <ProductCard product={product} key={product.id}/>
        )}
    </div>
  )
}

export default ProductsContainer

