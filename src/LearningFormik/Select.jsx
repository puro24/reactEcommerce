import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import TextError from './TextError'

const Select = (props) => {
   
     const {name,label,options,...rest}=props
     console.log(props)

     const dis=(e)=>{
         
     }
    return (
        <div className='form-control'>

            <label htmlFor={name}>{label}</label>
            <Field as='select' name={name} id={name} onChange={(e)=>dis(e.target.value)}>
             {
                 options.map(e=>{
                     return <option key={e.key} value={e.value}>
                             {e.state}
                            </option>
                 })
                
             }
              </Field> 
              <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>

    )
}

export default Select







