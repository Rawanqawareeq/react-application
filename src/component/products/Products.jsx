import React from 'react'
import Product from '../product/Product'

export default function Products() {
    const producrs =[
        {id:1, title:'product one', desc:'this in product one' , price:20000},
        {id:2, title:'product two', desc:'this in product two' , price:20000},
        {id:3, title:'product three', desc:'this in product three', price:20000 },
        {id:4, title:'product four', desc:'this in product four', price:20000 }
        
    ]
  return (
    
        
    
    <div className='row'>
        {producrs.map((product)=>
           <Product {...product} key={product.id}/>

        
       

        )}
       
        
     
    </div>
  )
}
