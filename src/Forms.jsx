import React, { useState,useContext,createContext } from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { BrowserRouter,Route,Switch,Link,useHistory} from 'react-router-dom'
import {AuthContext} from '../src/Contxt/AuthContext'
import { useEffect } from 'react'
import '../src/ind.css'

const Forms = (props) => {

const{setLoguser,setCartitemno}=useContext(AuthContext)

let history= useHistory()

const initVal={

    name:"",
    email:"",
    password:""
}

const validSchema= yup.object().shape({
  
     name:yup.string().required(),
     email:yup.string().required().email(),
     password:yup.string().min(3).max(12).required()
    
})

 const dataSave=(data)=>{
 
    console.log(data) 
    
    const username=data.name
    const password=data.password
    const email=data.email

    console.log(username,password)

    axios.post("http://localhost:17400/register", {username,password,email}).then((response)=>{

          console.log(response)

   })

 }
         
      const[regUser,setReguser]=useState({
          
        username:"",
        email:"",
        password:""

      })

  const setValue=(e)=>{

              const name=e.target.name
              const value=e.target.value
         
              setReguser({...regUser,[name]:value}) 
              console.log(name,value)
              console.log(regUser)
  }

  const suBmit=(e)=>{
            e.preventDefault()
            console.log("Submit triggered")
            
            const username=regUser.username
            const password=regUser.password

            console.log(username,password)

            axios.post("http://localhost:17400/login",{username,password}).then((res)=>{
       
            console.log(res)

            if(!res.data.error) {
                alert("user looged in")     
                     
                 console.log(res.data)
                 setLoguser(res.data.user)
                            
                sessionStorage.setItem("accessToken",res.data.token)
                getCaritemno()
                // history.push('/contact')
            }              
            else{
                
                alert("User not Registerd")

            }                                  
          })

  }

  const getCaritemno=()=>{

           console.log('getcartitemno')
           axios.post('http://localhost:17400/cartitemno',{},
        
        {
          headers:{accessToken:sessionStorage.getItem('accessToken')}
        }
        ).then((res)=>{
    
                 console.log('Form User')
                 console.log(res.data[0].units)
                 setCartitemno(res.data[0].units)
                 
        })
  }

     return (

         <div className='container'>
            <div className='row'>
                <div className='col col-6 m-auto d-grid'>

                <Formik initialValues={initVal} onSubmit={dataSave} validationSchema={validSchema} >
                <div > 
                    <p style={{color:'red',fontSize:'24px',textAlign:'center',justifyContent:'center',fontFamily:'serif'}}>Register New User</p>

                   <Form>
                       
                       <label htmlFor='name'> Enter Name: </label> <br/>

                       <ErrorMessage className="text-danger" name="name" component="span" />
                        
                        <Field autocomplete="off" name="name" placeholder='Enter UserName'  ></Field> <br />


                        <label htmlFor='email'> Enter Email: </label><br/>
          
                        <ErrorMessage className="text-danger" name="email" component="span" />

                       <Field autocomplete="off" name="email" placeholder='Email'  ></Field> <br />


                       <label htmlFor='password'> Enter Password: </label><br/>

                       <ErrorMessage className="text-danger" name="password" component="span" />

                       <Field autocomplete="off" name="password" placeholder='Enter Password' ></Field> <br />


                  <button type="submit">Submit</button>

                   </Form>
                </div>   
            </Formik>

                </div>
                <div  className='col col-6 m-auto d-grid'>
                
                <p style={{color: 'red',textAlign:'center',justifyContent:'center',fontSize:'24px',fontFamily:'serif'}}> Please Login</p>
                <form  action="">
                 <label htmlFor="username">UserName</label><br/>
                 <input type='text' onChange={setValue} name='username' value={regUser.username} placeholder='Enter Your Login Id'></input>  <br />
                 <label htmlFor='password'>Enter Password </label><br/>
                 <input type='text' onChange={setValue} name='password' value={regUser.password} placeholder='Enter Your Password'></input>  
                  <br />
                 <button onClick={suBmit}>Submit</button>
                 </form>
                </div>
            </div>
        </div>
    )
}


export default Forms
        
       

