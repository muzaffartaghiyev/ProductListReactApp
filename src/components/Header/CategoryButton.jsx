
const CategoryButton = ({active,setActive,setSearchCategory,category}) => {

    const handleClick = (category)=>{
        setActive(category)
        setSearchCategory(category)
    }
  return (
    <button className={`${active===category ? 'active': ''}`} onClick={()=>handleClick(category)}>{category}</button>
  )
}

export default CategoryButton
