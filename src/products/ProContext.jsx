import React, { useState } from 'react'
import { useContext,useReducer } from 'react'
import {contxt} from './Product'
import ProDisplay from './ProDisplay'

const ProContext = (props) => {
  
    const {item}= useContext(contxt)
    const [result,setresult]=useState([''])
    const [mode,setMode]=useState(1)
   
   const searchdisplay=(e)=>{
 
   const val=e.target.value
   console.log(val) 
    
   if(val==='0')
   {
    setMode(1)  
   }
else{
  const searchResult=item.filter((e)=>{
                 
    return val===e.type
})

console.log(searchResult)

setresult([...searchResult])

setMode(0) 

}
}
   

  return (
<> 

   <div className='justify-content-center text-center align-items-lg-center mb-5 bg-light'><span className='text-danger fw-bold px-3'>Search:</span><select height='30px' type='text' onChange={(e)=>searchdisplay(e)}>
           <option value='0'>Select All</option>
           <option value='GREEN TEA'>Green Tea</option>
           <option value='CTC TEA'>CTC Tea</option>
     
       </select></div>
 
   
   { mode ? item.map((e)=>{

return <div className='col col-4 d-flex m-auto'>
         <div key={e.key}>
              <ProDisplay {...e} />
        </div>
     </div>
 }): result.map((e)=>{

  return <div className='col col-4 d-flex m-auto'>
         <div key={e.key}>
              <ProDisplay {...e} />
        </div>
     </div>

 })  }
       
        </>
    )

}

export default ProContext
 