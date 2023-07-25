import React from 'react'

const Items = ({allItems}) => {
  return (
    <>
    {allItems.map((elem)=>{
        const {id,category,mainImage,heading,description} = elem;
        return(
          <div className="menu_image" key={id}>
          <img
            src={mainImage}
            alt={category}
          />
          <div className="menu_content">
           <h1>{heading}</h1>
           <p>{description}</p>
           <img
            src={mainImage}
            alt={category}
          />
          </div>
        </div>
        )
      })}  
      </>
  )
}

export default Items