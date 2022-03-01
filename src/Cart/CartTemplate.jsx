import React, { useContext,createContext } from 'react'
import ChkOut from '../CheckOut/ChkOut'
import '../ind.css'
import {cartContext} from './Cart'

const CartTemplate = (props) => {

    const {DeleteCartItem}  =useContext(cartContext)  

        
    return (
        
    <>
    
    <div className='container'>

            <div className='row'>

                    <div className='col col-6 d-block'>

                      {/* <h1> COL-1</h1> */}
                                            
                      <img  src={props.img} alt="" height='250px' width='80%'/>

                    </div>

                    <div className='col2 col-6 d-block bg-info'>
                            
                            {/* <h1>COL-2</h1> */}

                            {/* SUB-COLS */}

                            <div className='row'>

                                    <div className='subcol col-6 d-block bg-warning'>

                                    {/* <h3>SUB COL-1</h3> */}
                                      <p>Product_Name:</p>      
                                      {/* <p>Brand_Name:</p>      */}
                                      <p>Total:</p>  
                                      <p>Units Ordered:</p>
                                    </div>

                                    <div className='subcol1 col-6 d-block m-auto bg-white m-auto'>

                                            {/* <h3>SUB COL-2</h3> */}
                                            <p className='text-danger' >{props.product}</p>
                                            {/* <p className='text-center'>{props.brand}</p><br/> */}
                                            <p className='text-danger'>{props.total}</p>
                                            
                                            <p>{props.units}</p>

                                            <button onClick={()=>DeleteCartItem(props.ID)}>DELETE ITEM</button>

                                    </div>

                            </div>

                    </div>

            </div>

            <hr />
                
   </div>      

   </>
        ) 
        
}

export default CartTemplate
