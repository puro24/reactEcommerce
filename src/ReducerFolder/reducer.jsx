
export const reducer=(state,action)=>{
     
//    const[addtocart,setAddtocart]=useState([])
    console.log("reducer called...")
    console.log(state)
    switch(action.type){

      case 'GET':{
      console.log("GET")
      console.log(action.payload)
        return{
          ...state,
          data:action.payload,
          total:0
         }
         
        }

        case 'DELETE':{
          
          console.log('DELETE..')
          
          console.log(state.data)
          console.log('length:'+state.data.length)
        
          return{ 

            ...state,
            data: state.data.filter((e)=>{
            
            console.log('Filter is called..')
            
            console.log('action.paylaod:'+action.payload)
            console.log('e.ID:'+e.ID)
            return (e.ID!== action.payload)
           
          })

        }}
        case 'TOTAL':{
          console.log("total is called..")
          console.log(state.data)
                  
              let { total}= state.data.reduce((accum,curval)=>{
                         
                         console.log(accum.total)
                         console.log(curval)
                         accum.total+= curval.total 
                         return accum       

                     },{total:0})
                        
                      return {...state,total}

                    }
        case 'TOTAL_ITEMS':{
                        console.log('Total Items')
                   
                         let {total_items}= state.data.reduce((accum,val)=>{
                                     
                                     console.log(accum.total_items)
                                     console.log(val)
                                     accum.total_items+=val.units
                                     return accum

                         },{total_items:0})
                             return{...state,total_items}
                       }
                  }
                  
                  return state
                }           
        
        
        
    
