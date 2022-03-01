import React from 'react'
import { Formik,Form,ErrorMessage, Field } from 'formik'
import TextError from './TextError'

const Input = (props) => {

const { name,label,...rest}= props

    return (
        <div>
             
             <label htmlFor={name}>{label}</label> <br/>
             <Field id={name} name={name} {...rest}></Field>
             <ErrorMessage name={name} component={TextError}></ErrorMessage>

        </div>
    )
}

export default Input
 