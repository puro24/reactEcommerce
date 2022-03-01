import React, { useContext,createContext } from 'react'
import {Razorpay} from 'razorpay'
import { totalcontxt } from './ChkOut'
import axios from 'axios'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import AdressForm from './AdressForm'
import FormikContainer from '../LearningFormik/FormikContainer'
import SImpleForm from '../LearningFormik/SImpleForm'
import { AuthContext } from '../Contxt/AuthContext'


const loadScript=(src)=>{

    //  alert("You r on your way..!")
     return new Promise((res)=>{

        const script= document.createElement('script')
        script.src = src
        
        script.onload= ()=>{
            res(true)
        }
         script.onerror=()=>{
             res(false)
         }

         document.body.appendChild(script)
     })
          
}

const PayComp = (props) => {

    const st = useContext(totalcontxt)
    const {logUser}=useContext(AuthContext)
    const PassState=createContext()
    
    console.log('value of st:',st) 

    const  displayRazorpay= async(val)=>{

        const res= await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('RazorPay SDK failed to load')
            return
        }
        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": val * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": logUser,
            "description": "Test Transaction",
            "image": 'images/logo_Web.jpg',
            "order_id": st.orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": '',
                "email": '',
                "contact":''
            },
            "notes": {
                "address": "Jalpaiguri"
            },
            "theme": {
                "color": "#3399cc"
            },
            handler: async function(response){
                const data={
                    orderCreationId:st.order_id,
                    razorpayPaymentId:response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature:response.razorpay_signature,
                    amount: val,
                    
                }

                axios.post('http://localhost:17400/checkout',{data},
                {
                    headers:{accessToken:sessionStorage.getItem('accessToken')}
                    
                }).then((res)=>{
                    console.log(res)
                    const response=JSON.stringify(res)
                    console.log(response)
                })
            }
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open()
}
  
const initval={

    postalName:'',
    address:'',
    state:'',
    pin:'',
    country:'',
    contactNo:''
}
const validate=yup.object().shape({

    postalName:yup.string().required,
    address:yup.string().required,
    state:yup.string().required,

})

const save=()=>{

}
    return (

        <div>
            <div className='text-center'>
            <h1> WELCOME TO PAYMENT GATEWAY</h1>
             
              
              <p className='fw-bolder text-danger text-decoration-underline fs-4'> Please Fill the form for delivery.</p>
              </div> 
 
        <div className='container justify-content-center align-content-lg-center'>
           <FormikContainer value={st} />
           </div>

           <br/>
             
             {/* <button onClick={()=>displayRazorpay(st.state.total)}> Proceed To Pay</button> */}
             
             
        </div>
    )
}

export default PayComp
