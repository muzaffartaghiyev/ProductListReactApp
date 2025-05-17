import {productsData,categories} from './helper/data'
import './App.scss'

import Header from './components/Header/Header'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import { useState } from 'react'



function App() {

  const [searchInput, setSearchInput] = useState('')
  const [searchCategory, setSearchCategory] = useState('')

  return (
    <>
      <Header categories={categories} setSearchInput={setSearchInput} setSearchCategory={setSearchCategory}/>
      <ProductsContainer productsData={productsData} searchInput={searchInput} searchCategory={searchCategory}/>
      
    </>
  )
}

export default App
