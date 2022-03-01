import React from 'react'
import { ErrorMessage, Form, Field,Formik,useFormik } from 'formik'
import * as yup from 'yup'
import '../ind.css'

const initialValues ={

    name:'',
    email:'',
    channel:''
        
}

const onSubmit=(data)=>{
   
       console.log('onsubmit',data)

}

const validationSchema=yup.object({

    name:yup.string().required('Required'),
    email:yup.string().email('Not a valid format').required('Required'),
    channel:yup.string().required('Required')
    
})

const dropdownoptions=[
  {key:'select an option',value:''},
  {key:'option 1',value:'opt1'},
  {key:'option 2',value:'opt2'},
  {key:'option 3',value:'opt3'},
  {key:'option 4',value:'opt4'}
    
]

const AdressForm = (props) => {

    // const formik=useFormik({

    //     initialValues,
    //     onSubmit,
    //     validationSchema,
        
    // })

//    console.log(formik.touched)
    return (
        <div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
           <Form>
               
             <label> Name:</label>

              <Field type='text' id='name' name='name' ></Field><br/>

              <ErrorMessage className='errortxt' name='name'></ErrorMessage><br/>
            
            <label> Email:</label>

              <Field type='text' id='email' name='email'></Field><br/>

              <ErrorMessage name='email'></ErrorMessage><br/>

              <label> Channel:</label>

              <Field type='text' id='channel' name='channel'></Field><br/>
        
              <ErrorMessage name='channel'></ErrorMessage><br/>

              <Field as='select' id='state' name='state' >
                 <option value="red">Red</option>
                 <option value="green">Green</option>
                 <option value="blue">Blue</option>
                </Field><br/>
        
             <ErrorMessage name='channel'></ErrorMessage><br/>

              <button type='submit'> Submit</button>
             
             </Form>
           </Formik>

        </div>
        
    )
}

export default AdressForm
