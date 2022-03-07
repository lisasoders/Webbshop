import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'

function Item() {

  const [product, setProduct] = useState([])


  const fetchItem = async () => {

  }

useEffect(() => {
  fetchItem();
})

  return (
 
    <div>
        <h1>item</h1>
    </div>
   
   
  )
}



export default Item