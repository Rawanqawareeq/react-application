import React from 'react'

function Product(props) {
  return (
    <>
      <div className='col-md-4'>
            <div className='products'>
            <h2>{props.title} </h2>
            <p>{props.desc}</p>
            <p>{props.price}</p>

            </div>

        </div>
        
    </>
  )
}

export default Product
