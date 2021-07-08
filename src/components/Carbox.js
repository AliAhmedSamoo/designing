import React from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'

const Carchart = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 520px;
    height: 200px;
    display: flex;
    grid-template-columns: auto auto auto auto;
    flex-direction: row;
     align-items: center;
     justify-content: center;
     margin: 5px;
     border-radius: 10px;
   
  
 
`;
const Cardetails = styled.div`
  

    width: 45%;
    height: 180px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: row;
     align-items: center;
    // justify-content: center;
   
   
  
 
`;

export default function Carbox() {
    return (
  <>      <Carchart><Cardetails>
    <div> 
      <h2>Honda Civic</h2>
      <h5>Model: 2021</h5>
      <h5>Rs. 1500/hour</h5>
      <h5>Owner Name: Ali Ahmed</h5>
      <h5>Onwer Phone: 03XXXXXXXXX</h5>
     
      <Btn>book Now</Btn>
      </div> </Cardetails>
      <img src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='90%'/>
      
      </Carchart> 

      <Carchart><Cardetails>
    <div> 
      <h2>Honda Civic</h2>
      <h5>Model: 2021</h5>
      <h5>Rs. 1500/hour</h5>
      <h5>Owner Name: Ali Ahmed</h5>
      <h5>Onwer Phone: 03XXXXXXXXX</h5>
     
      <Btn>book Now</Btn>
      </div> </Cardetails>
      <img src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='90%'/>
      
      </Carchart> 

    
</>

    )
}
