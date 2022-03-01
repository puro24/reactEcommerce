import React, { useContext } from 'react'
import { useState } from 'react'
import pro from './pro'
import { cardadto, contxt } from './Product'

const ProDisplay = ({product_Name,brand,image,image1,image2,image3,price,id}) => {

 const[noofItems,setNoofitems]=useState(0)
 const[img,setImage]=useState(image)
  
 const {AddtoCart}= useContext(contxt)
  
  const InceDecre=(e)=>{

             const num=e.target.value

                 if(num<5 && num>0)
                 {
                   setNoofitems(num)
                 }
               else{
                 alert("No of Items invalid")
                 e.target.value=0
               }
 
  }      

  const zoom=(val)=>{

    console.log(val)
    setImage(val)
            
 }       


 
 
  return (
<>
    
      <div>
      
        <div>
           <div className='card'> 
          
             <p className='card-header text-danger text-capitalize text-center' >{product_Name}</p>
              
              <div className='card-img'>
               <img className='bambiImg rounded float-start' src={img} alt="" height='100%' width='100%'/>
 
              <div className='container'>
               <div className='row'>
                 <div className='col col-4 d-flex m-auto'>
 
                 <img src={image1} alt="" height='100%' width='100%' onClick={()=>zoom(image1)}/>
                 
                 </div>
                 
                 <div className='col col-4 d-grid m-auto'>

                 <img src={image2} alt="" height='100%' width='100%' onClick={()=>zoom(image2)}/>

                 </div>

                 <div className='col col-4 d-grid m-auto'>

                 <img src={image3} alt="" height='100%' width='100%' onClick={()=>zoom(image3)}/>

                 </div>
                   
                 </div>  

               </div>

               </div>
             <p className='card-text text-center'>{brand}</p>
             <p className='card-footer text-center text-danger'><span>Rs:</span>{price}</p>
          </div>
          <div className='justify-content-center align-content-center text-center'>
            <span className='text-danger fw-bold'>No.of Items:<input className='cartInput' type='number' onChange={(e)=>InceDecre(e)}></input>  <button className='Cartbutton' onClick={()=>AddtoCart(id,product_Name,price,image,noofItems)}>Add To Cart</button></span>
          </div> 
          
        </div>
      </div>

      </>
    )

}

export default ProDisplay
