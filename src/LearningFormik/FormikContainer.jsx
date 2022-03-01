import React from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { array } from 'yup/lib/locale'
import TextError from './TextError'

const FormikContainer = (props) => {

    const[states,setState]=useState([''])
    const[district,setDistrict]=useState([''])

     console.log('Value of Props:',props.value.state.total)

     const total=props.value.state.total

    useEffect(()=>
    axios.get("https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json")
    .then((r)=>{
       console.log(r.data.states)
        const data=JSON.stringify(r.data.states)
    //    console.log(data)
         setState(r.data.states)
    })
    ,[])

    const initialValues={
 
         name:'',
         states:'',
         streetAdress:'',
         landMark:'',
         districts:'',
         email:'',
         contactNo:'',
         pin:''

    }

     const dropdownoptions=[
             
        //  states.map((e)=>{
        //      return  <div key={e.key} value={e.states.state} >
                     
        //               {e.states.state}
        //      </div>
        //  })
            // {key:'select an option',value:''},
            // {key:'option 1',value:'opt1'},
            // {key:'option 2',value:'opt2'},
            // {key:'option 3',value:'opt3'},
            // {key:'option 4',value:'opt4'}
           
     ]

    const onSubmit=(data)=>{
        
            //  const{  name,
            //  states,
            //  streetAdress,
            //  landMark,
            //  districts,
            //  email,
            //  contactNo,
            //  pin}=data

             console.log('Onsubmit',total) 
             
             axios.post("http://localhost:17400/delivery",{data,total},{
                headers:{accessToken:sessionStorage.getItem('accessToken')}
            }).then((res)=>{
               
                   console.log("data posted")
                               
            })
     }
    
    const validationSchema=yup.object({
        name:yup.string().required('Required'),
        states:yup.string().required('Required'),
        streetAdress:yup.string().required('Required'),
        landMark:yup.string(),
        districts:yup.string().required('Required'),
        email:yup.string().email('Not a Valid Email Format').required('Required'),
        contactNo:yup.number().required('Required'),
        pin:yup.string().required('Required')
    })
const dis=(val)=>{

    //const v= e.target.value
    console.log('dis')
    console.log(val)
     
     const dist=states.find((e)=>{
                     
          if(e.state===val)
          {
            //   console.log([e.districts])
              return (e)
          }
          
      })
    
       console.log(dist)
       setDistrict(dist.districts)
    
}
   
    return (
     
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
     
          {({values,handleChange})=>{
                       return <Form>
                                     
                       {/* <FormikControl control='input' type='text' name='name' label='Name'></FormikControl> */}
                       <label htmlFor='name'>Enter Your Name</label> <br/>
                       <Field name='name' placeholder='Enter Your Name'></Field> <br/>

                       <ErrorMessage name='name' component={TextError}></ErrorMessage>

                      <label htmlFor='streetAdress'>Street Address</label> <br/>
                      <Field name='streetAdress' placeholder='Enter Your Street Address'></Field> <br/>
                      
                      <ErrorMessage name='streetAdress' component={TextError}></ErrorMessage>

                       <label htmlFor='landMark'>Land-Mark (If Any)</label> <br/>
                       <Field name='landMark' placeholder='Enter Land-Mark if any..'></Field> <br/>

                       <ErrorMessage name='landMark' component={TextError}></ErrorMessage>

                       <label htmlFor='states'>Select State</label> <br/>
                                       
                       <Field as='select' name='states' 
                        onChange={(e)=>{dis(e.currentTarget.value) 
                        handleChange(e)}} placeholder='Select State' >

                        {
                            states.map((e,index)=>{
                                return <option key={e.key} value={e.states} >
                                         
                                         {e.state}
                                         
                                       </option>
                                         
                                                      
                            })
                            
                            
                        }
                                      
                        </Field><br/> 
                        <ErrorMessage name='states' component={TextError}></ErrorMessage>

                       <label htmlFor='districts'>Select District</label> <br/>
                                               
                         <Field as='select' name='districts' onChange={handleChange}>
                        {
                            district.map((e,index)=>{
                               
                                 console.log(e)
                                 return <option key={e.key} value={e}>
                                    
                                      {e}
                                    
                                       </option>
                            })
                        }
         
                        </Field>

                        <ErrorMessage name='districts' component={TextError}></ErrorMessage>
                       <br/>

                        <label htmlFor='email'>Email</label> <br/>
                        <Field name='email'></Field> <br/>

                        <ErrorMessage name='email' component={TextError}></ErrorMessage>

                        <label htmlFor='contactNo'>Mobile No</label> <br/>
                        <Field name='contactNo' placeholder='Enter Contact No'></Field> <br/>

                        <ErrorMessage name='contactNo' component={TextError}></ErrorMessage>

                        <label htmlFor='pin'>Pin</label> <br/>
                        <Field name='pin' placeholder='Enter PIN'></Field> <br/>

                        <ErrorMessage name='pin' component={TextError}></ErrorMessage>
                        
                         <button type='submit'>CheckOut</button>
                         
                        
                      
             </Form>       
          }}            
             
     </Formik>

    )
                    }

export default FormikContainer
