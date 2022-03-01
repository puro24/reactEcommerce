import React from 'react'
import { useContext } from 'react'
import { useEffect,useState } from 'react'
import { AuthContext } from './Contxt/AuthContext'
import { useHistory } from 'react-router'


const Logout = (props) => {

    const history=useHistory()

    const{setLoguser,setCartitemno}=useContext(AuthContext)

    useEffect(()=>{
                    console.log("LogOut is Fired..") 
                    sessionStorage.removeItem("accessToken")
                    setLoguser("")
                    history.push('/')
                    setCartitemno(0)
              },[])

    return (
        <div>
             <h1> You are logged out</h1>
        </div>
    )
}

export default Logout
