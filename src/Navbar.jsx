import React, { useEffect } from 'react'
import { Link,Switch } from 'react-router-dom'
import '../src/ind.css'
import { AuthContext } from './Contxt/AuthContext'
import { useState,useContext,createContext } from 'react'
import axios from 'axios'
import { cartContext } from './Cart/Cart'
import NavTemplate from './NavTemplate'
  
const Navbar = (props) => {

  //  const{logUser,cartItemno}=useContext(AuthContext) 
   
 
    
    return (
         <div>
       
            <NavTemplate />

        </div>
    )
}

export default Navbar
