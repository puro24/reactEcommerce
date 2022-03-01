import React from 'react'
import {Field,ErrorMessage,Form, Formik} from 'formik'
import * as yup from 'yup'

const SImpleForm = (props) => {

    const initialValues={
 
        name:'Test',
        // email:'',
        // contactNo:'',
        // address:''

   }
   const onSubmit=(data)=>{

       console.log(data) 
                 
    }
   
   const validationSchema=yup.object({
       name:yup.string().required('Required'),
    //    email:yup.string().email('Not a Valid Email').required('Required'),
    //    contactNo:yup.number(10).required('Required'),
    //    address:yup.string().required('Required')
   })

    return (
        <div>

                     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                       <Form>
                           
                        <Field name='name' ></Field>
                         <button type='submit'>Submit</button>
                       </Form>

                     </Formik>
            
        </div>
    )
}

export default SImpleForm
