import React, {createContext, useContext, useReducer, useState } from 'react'
import pro from './pro'
import ProContext from './ProContext'
import {reducer} from '../ReducerFolder/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../Contxt/AuthContext'
import { useHistory } from 'react-router-dom'

export const contxt=createContext()
export const cartxt=createContext()
export const cardadto=createContext()

const initialstate={

    item:pro,
    totalamt:0,
    totalitems:0,

}

const Product = (props) => {

    const history=useHistory()
    
    const {setCartitemno,cartItemno}=useContext(AuthContext)

    const[state,dispatch]=useReducer(reducer,initialstate)
    const[proitems,setProitems]=useState(pro)
    const[cartitems,setCartitems]  = useState([''])

    const AddtoCart=async(id,product_Name,price,image,units)=>{

        console.log("Addto Cart Clicked")
        console.log("ID:" +id) 
        console.log("Units:" +units) 
                     
      await axios.post("http://localhost:17400/addtocart", {id,product_Name,price,image,units},{
          headers:{accessToken:sessionStorage.getItem('accessToken')}
      }).then((res)=>{

             if(res.data==='U r Not Logged In')
             {
                 alert('U r not Logged In. Please Log in to Continue')
                 history.push('/form')
             }
             else{

                pro.map((e)=>{
            
                    if(e.id===id){
                        return setCartitems([...cartitems,e])
                    }        
                         
         })
                alert("Item Added To Cart")
             }
              
              console.log(res)
        })
                
        console.log(cartitems)
        console.log(cartitems.length)
        countTotalCartItems()
                      
    }

        const countTotalCartItems =()=>{

            console.log('Cart Item Count..') 
            axios.post("http://localhost:17400/cartitemno",{},{
                headers:{accessToken:sessionStorage.getItem('accessToken')}
            }).then((res)=>{

                console.log(res.data[0].units)
                setCartitemno(res.data[0].units)
            })
        }

        

    return (
        
    <div>
       <h1>Products</h1>
           

            <div className='container-fluid'>
       
                <div className='row'>
                     
                <contxt.Provider value={{...state,AddtoCart}}>
                
                <ProContext />
                        
                </contxt.Provider>               
              
               
                </div>
              
            </div>
     
        </div>
    )
}

export default Product
