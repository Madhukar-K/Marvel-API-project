import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';

const Marvel = () => {

   const[items,setItems]=useState([])
   const[query,setQuery]=useState([])
   const[image,setImage]=useState([])

   const hash = "faed0431d81696d808f97e124d8e3de8"

  const API = `https://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=0f42ec7f1ede250302d5076d6b8fea8f&hash=${hash}`


   async function getData(){
       const result = await axios.get(API)
        console.log(result.data);
        setItems(result.data.data.results[0])
        setImage(result.data.data.results[0].thumbnail)
   }


   const submit=(e)=>{
        e.preventDefault();
        getData()
   }


  return <div className='main'>
<header>
    
<h1 className='head'>Marvel Search</h1>
</header>

<form onSubmit={submit}>

<input type="text" placeholder="Enter youre search" onChange={(e)=>{setQuery(e.target.value)}} />

</form>

<Character items={items} image={image}/>
  </div>;
};

export default Marvel;
