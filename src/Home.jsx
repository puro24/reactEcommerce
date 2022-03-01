import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { BrowserRouter,Route,Switch,Link,useHistory} from 'react-router-dom'

const Home = (props) => {

    return (
        <div>
          
              <h1 className='header'>Home</h1>
             
              <div className='container'>

                 <div className='row'>
 
                   <div className='col col-6 d-grid m-auto'>

                      {/* <p style={{color:'yellow',backgroundColor:'red'}}> col 1</p> */}
                       <img className='Main_Img' src='images/tea_animation.gif' height='100%' width='100%'></img>
                   </div>

                   <div className='col col-6 d-grid m-auto'>

                        {/* <p style={{color:'red',backgroundColor:'yellow'}}> col 2</p> */}
                        <h2 className='display-1 text-center fw-bold mt-5 py-2' > <span className='text-danger'>Welcome</span>    </h2> 
                        <p className='display-6 text-center'>to the wonderful World of Tea with 
                         <spand className='text-danger mx-2 fw-bold'>US.</spand></p> <br/>
                 
                  <div className='text-center'>
                        <h3><span className='text-center justify-content-center'>Let's Begin Our Journey by Sipping</span> <br/>
                         <span className='cupoflife text-center text-danger '>A Cup Of Life...</span> </h3>   <br/>
                 </div>  
                  </div>     


                 </div>

              </div>


             
              <section id='tea_section'>
                 <div className='teaStory container mt-5'>
                   <p>LET's GIVE AN INSIGHT INTO THE TEA </p>  
                 
                   </div>

               <div className='container mt-3'>
                   <div className='row'>
                     <div className='col col-6 d-grid m-auto'>

                      <p><span className='teaSpan' >CTC Tea</span> :<span className='teaText'> CTC (Crush,tear & Curl) popularly known as 'Chai' in India. 
                        As the name implies CTC is a manufacturing process of  making tea in which 
                          the green leaves i.e the raw-materials are passed through series of cylindrical
                          rollers having sharp blades engraved in certain angles for crushing,tearing 
                          & curling the tea leaves.
                            The CTC teas are marked as per the region of production.For example teas
                            produced in Dooars region of North-Bengal are marked as 'Dooars Tea'.  <br/>
                            Similarly teas produced in Assam are marked as 'Assam Tea'.In the Indian domestic market, this type 
                            of manufacture is by far the most popular – over 80% of tea production is of the CTC type.
                            In the export market, particularly in the C.I.S., the Middle East, United Kingdom and Ireland, 
                            CTC teas continue to be the most highly in demand.<br/>
                            With the advent of fitness & health consciousness the question still remains related to health benefit of 
                            consuming CTC tea inspite of its immense popularity.<br/>
                            Lets dive into the issue for a while. As mentioned above the CTC tea is a manufacturing process in which
                            the leaves are subjected to rigourous process in-order to get the desires taste & aroma as a result of 
                            which the cells of the leaves are broken down to encourage the fermentaion process.The caffein percentage
                            in CTC tea is said to be high which is good if taken in measurable quantity.<br/>
                            CTC tea contains antioxidants which lower the risk of heart diseases. CTC tea helps in weight loss by
                            blocking fat absorption in the cells. It also boosts digestion and immune system. 
                            Antioxidants present in CTC tea can help in the prevention of cancer.
                            So enjoy 'A Cup of Bambi CTC tea' with a smile and enjoy the taste of its unique flavor and taste.
                            </span>

                             </p>


                     </div>

                      <div className='col c0l-6 d-flex m-auto'>

                        <img src='/images/Chai.jpg' width='100%' height='100%'/>

                      </div>

                   </div>
                   
                   </div>   
                   
                   <div className='container mt-3'>
                   <div className='row'>
                     <div className='col col-6 d-grid m-auto'>

                      <p><span className='teaSpan' >Green Tea</span> :<span className='teaText'> Green Tea popularly known as 'Chai' in India. 
                        As the name implies CTC is a manufacturing process of  making tea in which 
                          the green leaves i.e the raw-materials are passed through series of cylindrical
                          rollers having sharp blades engraved in certain angles for crushing,tearing 
                          & curling the tea leaves.
                            The CTC teas are marked as per the region of production.For example teas
                            produced in Dooars region of North-Bengal are marked as 'Dooars Tea'.  <br/>
                            Similarly teas produced in Assam are marked as 'Assam Tea'.In the Indian domestic market, this type 
                            of manufacture is by far the most popular – over 80% of tea production is of the CTC type.
                            In the export market, particularly in the C.I.S., the Middle East, United Kingdom and Ireland, 
                            CTC teas continue to be the most highly in demand.<br/>
                            With the advent of fitness & health consciousness the question still remains related to health benefit of 
                            consuming CTC tea inspite of its immense popularity.<br/>
                            Lets dive into the issue for a while. As mentioned above the CTC tea is a manufacturing process in which
                            the leaves are subjected to rigourous process in-order to get the desires taste & aroma as a result of 
                            which the cells of the leaves are broken down to encourage the fermentaion process.The caffein percentage
                            in CTC tea is said to be high which is good if taken in measurable quantity.<br/>
                            CTC tea contains antioxidants which lower the risk of heart diseases. CTC tea helps in weight loss by
                            blocking fat absorption in the cells. It also boosts digestion and immune system. 
                            Antioxidants present in CTC tea can help in the prevention of cancer.
                            So enjoy 'A Cup of Bambi CTC tea' with a smile and enjoy the taste of its unique flavor and taste.
                            </span>

                             </p>


                     </div>

                      <div className='col c0l-6 d-flex m-auto'>

                        <img src='/images/GT_1.jpg' width='100%' height='100%'/>

                      </div>

                   </div>
                   
                   </div>  
                    

              </section>
        </div>

        
    )

}

export default Home
