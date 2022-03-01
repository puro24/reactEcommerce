import axios from 'axios'
import React, {createContext, useEffect, useState,useReducer } from 'react'
import { reducer } from '../ReducerFolder/reducer'

import PayConfirm from './PayConfirm'
import Blank from './Blank'

export const totalcontxt=createContext()

const ChkOut = (props) => {
    
    const[flag,setFlag]=useState('')
    const[orderid,setOrderid]=useState('')

    const initialdata={
        data:[],
        total_items:0,
        total:0
       }
    const[state,dispatch]=useReducer(reducer,initialdata)

    useEffect(()=>{

        axios.get("http://localhost:17400/ordersummary",{
            headers:{accessToken:sessionStorage.getItem('accessToken')}
        }).then((res)=>{
            console.log(res.data)
            dispatch({type:'GET',payload:res.data})
            dispatch({type:'TOTAL'})
            setFlag(false)


        })
    },[])


    const st=(val)=>{

         console.log('st clciked')
         
         if(val==='true'){
           alert("You chose to pay online")
           axios.post("http://localhost:17400/paynow", {amount:[state.total]}).then((res)=>{

                   console.log("online pay")
                    console.log(res.data)
                    setOrderid(res.data)
           })

           setFlag(true)
         }
         else{
          alert("You chose to COD")
          setFlag(true) 
        }
         
            }

    return (
        <div>
          <div>
            <h1> Order Summary</h1>
             <div classNameName='container'>
                 
           <p> Your Total Amt is:Rs {state.total}</p>

<div> Payment Options</div>

<div classNameName='row'>
  <div classNameName="col-md-12 ">
    <div classNameName="card">
      <div className="card-body">

         <div className="form-check">

            <input id="payonline" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>st('true')}/>
               <label className="form-check-label" for="flexRadioDefault1">
                  Pay_Online
              </label>
           </div>

         <div className="form-check">
             <input id="cashondelivery" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>st('false')}/>
               <label className="form-check-label" for="flexRadioDefault2">
                 Cash-On-Delivery
              </label>
         </div>
       </div>
      </div>
    </div>
   </div>
  </div>
  </div>   
    
               
              {  flag ?  <totalcontxt.Provider value={{state,orderid}}>

                             <PayConfirm />

                          </totalcontxt.Provider> 

                :<Blank />}

            

 
</div>
 )
}

export default ChkOut
