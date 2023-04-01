import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beauty from './Pages/Beauty'
import Home from './Pages/Home'
import Homeliving from './Pages/Homeliving'
import Kids from './Pages/Kids'
import Productpage from './Pages/Productpage.jsx'
import Men from './Pages/Productpage.jsx'
import Studio from './Pages/Studio'
import Women from './Pages/Productranderpage'
import Login from './Pages/Login'
import Singleproductpage from './Pages/Singleproductpage'
import PrivateRoute from './Contextprovider/PrivateRoute'
import { Heading } from '@chakra-ui/react'


export default function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productpage/:param' element={<Productpage/>}/>
        {/* <Route path='/women/:param' element={<Women/>}/>
        <Route path='/kids/:param' element={<Kids/>}/> */}
        <Route path='/beauty/:beauty' element={
<PrivateRoute> <Beauty/></PrivateRoute>
       
        }/>
        <Route path='/homeliving' element={<Homeliving/>}/>
        <Route path='/studio' element={<Studio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productpage/:param/singleproductpage/:id" element={<Singleproductpage/>}/>
        <Route path="*" element={<Heading>Page Not Found</Heading>}/>
        
 

        
    </Routes>
  )
}
