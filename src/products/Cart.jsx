import axios from 'axios'
import React, {createContext, useEffect, useReducer, useState } from 'react'
import { useContext } from 'react'
import { cartxt, contxt } from '../products/Product'
import CartTemplate from './CartTemplate'
import {reducer} from '../ReducerFolder/reducer'
import { useHistory,Link,BrowserRouter as router,Route,Switch } from 'react-router-dom'
import ChkOut from '../CheckOut/ChkOut'
import { AuthContext } from '../Contxt/AuthContext'
import Navbar from '../Navbar'

export const cartContext = createContext()

const Cart = (props) => {
  
  // const {cart}=useContext(AuthContext)   
   const[displaycart,setDisplaycart]=useState([''])
      
   const {cartItemno,setCartitemno}=useContext(AuthContext)

   const initialdata={
    data:[],
    total_items:0,
    total:0
   }
   const[state,dispatch]=useReducer(reducer,initialdata)
     
   useEffect(()=>{
   
        console.log("UseEffect..in Cart")
        axios.post("http://localhost:17400/displaycart",{},{
          headers:{accessToken:sessionStorage.getItem('accessToken')}
        }).then((res)=>{
           
         setDisplaycart(res.data)
         dispatch({type:'GET',payload:res.data})
                    
        })


       },[])
           
     console.log("state..")
     console.log(state.data)

     const DeleteCartItem=(id)=>{

          axios.post("http://localhost:17400/delete",{id}).then((r)=>{
           
          console.log(r)

          dispatch({type:'DELETE', payload: id})
          console.log(state.total_items)
          
       
     })
 
    }

    useEffect(()=>{
      console.log("Total UseEffect Triggered")
      dispatch({type:'TOTAL'})
      dispatch({type:'TOTAL_ITEMS'})

},[state.data])

const history=useHistory()

const goTo=()=>{
  history.push('/Checkout')
}


    return (
        
         <div>
             {setCartitemno(state.total_items)}
              
              <div>Total Amt:Rs {state.total}</div>   
             
              <Link to ='/Checkout'><button >Check_Out</button> </Link>   

              <cartContext.Provider value={{DeleteCartItem,...state}}>
            
                {
                
                state.data.map((e)=>{

                  return     <div key={e.key}>
                              <CartTemplate {...e} />
                             </div>
               
                                    })
                
              }
                    
              </cartContext.Provider>   
              
              
           </div>
         
                 
    )
}

export default Cart
    