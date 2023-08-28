'use client'
import {useEffect, useState} from 'react';

const ProductList = () => {
    const [product,setProduct]=useState([])
    useEffect(async()=>{
        let data = await fetch("https://dummyjson.com/products");
        data =  await data.json();
        console.log(data)
        setProduct(data.products)
    },[])
  return (
    <div>
    <h1>ProductList</h1>
    {
        product.map((item)=>(
            <h3>{item.title}</h3>
        ))
    }
    </div>
  );
}

export default ProductList;
 