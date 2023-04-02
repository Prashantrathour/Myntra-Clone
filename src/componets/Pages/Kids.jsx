import React from 'react'
import Navbar from '../Navbar'
import axios from "axios"
import { GridItem } from '@chakra-ui/react'


export default function Kids() {
//   let getdata= fetch("https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Child").then((res)=>res.json().then((data)=>{
//     return data
//   }))
  let get=async()=>{
let res= await fetch("https://zany-red-hen-kilt.cyclic.app/beauty")
let data= await res.json()


console.log(data)
}

  get()
 
  return (
    <>
        <Navbar/>
    <div>Kids</div>
    </>
  )
}

