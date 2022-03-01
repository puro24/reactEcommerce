import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Forms from './Forms'
import Logout from './Logout'
import Navbar from './Navbar'
import Product from './products/Product'
import ChkOut from './CheckOut/ChkOut'
import Cart from './Cart/Cart'
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import { useState,useEffect, useContext } from 'react'
import {AuthContext} from '../src/Contxt/AuthContext'
import axios from 'axios'
import PayComp from './CheckOut/PayComp'


const App = (props) => {
  
    const [logUser,setLoguser]=useState('')
    const [cartItemno,setCartitemno]=useState(0)
    
useEffect(()=>{

    console.log("useEffect Triggered...!!")
     if (sessionStorage.getItem("accessToken"))
     {
      
      axios.get("http://localhost:17400/loggedUser",{
        headers:{
          accessToken: sessionStorage.getItem("accessToken")
        }
      }).then((res)=>{
     console.log("UseEffect Response")
                              console.log(res)
                              setLoguser(res.data.token.user)
        })
          
  //       axios.post('http://localhost:17400/cartitemno',{},
    
  //       {
  //         headers:{accessToken:sessionStorage.getItem('accessToken')}
  //       }
  //       ).then((res)=>{
    
  //                console.log('nav user')
  //                setCartitemno(res.data[0].units)
                 
  //       })
   }},[])

     return (
        <div>
            <AuthContext.Provider value={{logUser,setLoguser,cartItemno,setCartitemno}}>

             <Navbar />
               
            <Switch>
            <Route default path='/home' component={Home} />    
             <Route path='/form' component={Forms} />
             <Route path='/Logout' component={Logout} />
             <Route path='/product' component={Product} />
             <Route path='/cart' component={Cart}/>
             <Route path='/Checkout' component={ChkOut}/>  
             <Route path='/payComp' component={PayComp}/>
            </Switch>

          </AuthContext.Provider>

        </div>
    )
}
export default App
