import { Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar2 from '../images'
import Navbar from '../Navbar'
import Productranderpage from './Productranderpage'

export default function Productpage() {
  const{param}=useParams()

  return (
    <>
       <Productranderpage param={param}/>
    </>
  )
}
