import React from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import { Image } from 'antd';
import { Link } from 'react-router-dom';


const Carchart = styled.div`
  
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 520px;
    height: 200px;
    display: flex;
    grid-template-columns: auto auto auto auto;
    flex-direction: row;
     align-items: center;
     justify-content: center;
     margin: 5px;
     border-radius: 10px;
box-shadow: 0px 0px 2px 5px;
     @media screen and (max-width: 768px) {
      width: 200px;
      height: 100px;
    
    }
   
  
 
`;
const Cardetails = styled.p`
  
  // background: #000;
    width: 45%;
    height: 180px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: row;
     align-items: center;
    // justify-content: center;
   
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 7px;
      height: 100px;
      margin-top: 2px;
      margin-left: 10px;
    
    }
  
 
`;




export function Carbox() {
  return (
    <>      <Carchart><Cardetails>
      <div>
        <h2>Honda Civic</h2>
        <h5>Model: 2021</h5>
        <h5>Rs. 1500/hour</h5>
        <h5>Owner Name: Ali Ahmed</h5>
        <h5>Onwer Phone: 03XXXXXXXXX</h5>

        <Link to="/bookingform">  <Btn >book Now</Btn></Link>
      </div> </Cardetails>
      <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%' />

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
        <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%' />

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
        <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%' />

      </Carchart>




    </>

  )
}

export function PopularCars() {
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
      <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%' />

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
        <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%' />

      </Carchart>


    </>

  )
}
