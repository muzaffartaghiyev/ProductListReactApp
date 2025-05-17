import { useState } from 'react'


import "./Header.scss"
import CategoryButton from './CategoryButton'

const Header = ({categories,setSearchInput,setSearchCategory}) => {
  const [active,setActive] = useState("")

  return (
    <header>
        <h1>Products List</h1>
        <nav>
            <div className='btns'>
              {categories.map((category,index)=>
                <CategoryButton active={active} setActive={setActive} setSearchCategory={setSearchCategory} category={category} key={index}/>
              )}
            </div>
        </nav>
        <input type="search" placeholder='Search Product ...' onChange={(e)=>setSearchInput(e.target.value)}/>
    </header>
  )
}

export default Header
