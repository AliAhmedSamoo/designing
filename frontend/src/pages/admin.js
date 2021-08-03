import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import {Carbox} from '../components/Carbox'
import { Image } from 'antd';
import { Link } from 'react-router-dom';


 const Logo = require('../Carimages/06dd5effc08bd0d3c5fd54957587a826');

const AppContainer = styled.div`
  
background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
background-Size: 20%;
//  width: 2200px;
 height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
//background: rgb(50,142,65);
// background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const CarrequestsContainer = styled.div`
  
   // background: #000;
   width: 80%;
   height: 500px;
   overflow-y: scroll;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
   align-items: center;
   justify-content: center;
   margin: 30px;
   border-radius: 5px;
   box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
   @media screen and (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
   align-items: center;
   justify-content: center;
      
`;

const MessagesContainer = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 80%;
    height: 300px;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: colunm;
     align-items: center;
     justify-content: center;
    margin: 100px;
  border-radius: 50px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const SubMessagesContainer = styled.div`
  
//background: #000;
    width: 90%;
    height: 280px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
   
  
   
 
`;





const MessagesBox = styled.div`
  
background: #fff;
    width: 100%;
    height: 150px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;


const UserinfoContainer = styled.div`
  
background: #999;
    width: 80%;
    height: 300px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 100px;
    border-radius: 50px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;



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

    @media screen and (max-width: 768px) {
      width: 270px;
      height: 170px;
    
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





function Admin() {




  const [Messegee, setMessegee] = useState([""])

  const [Car, setCar] = useState([""])

useEffect(() => {
  
const requestOptions = {
  method: 'GET',
  
  redirect: 'follow'
};

fetch("http://localhost:5000/messegesforadmin", requestOptions)


.then(res => res.json()
 // console.log(res)
) 
   .then(result => setMessegee(result))

 .catch(error => console.log('error', error));


 

fetch("/getcarreqdata", requestOptions)
  .then(res => res.json())
 
 .then(result => setCar(result))
 
  .catch(error => console.log('error', error));

},[]);


    
 console.log("Car data " ,Car)
// console.log(Messegee)


const Dattaaa =  () => {
   
  Car.splice(1,1)

  const newcar = Car;
  console.log()
  setCar([""])
  setCar(newcar)

  }


  return (
   
    <AppContainer >
      
      <CarrequestsContainer>
      
      
      {Car.map((Carr, index ) => (
        <Carchart><Cardetails>
    <div> 
      <h2>{Carr.Carname}</h2>
      <h5>Model: {Carr.Model}</h5>
      <h5>Rs. {Carr.price}/hour</h5>
      <h5>Owner Name: {Carr.username}</h5>
      <h5>Onwer Phone: 03{Carr.number}</h5>
     
      <Btn>Accept</Btn><Btn  value="Delete"   >Reject</Btn>


      </div> </Cardetails>
      <Image src='' alt="Hondacivic" width='50%' height='96%'/>
      
      
      </Carchart> 

    ) )}  



      </CarrequestsContainer>













      <MessagesContainer>

        <SubMessagesContainer >
         
        <div>  <div> Name :   
         {Messegee[0].name}
          </div>
          <div>  Email : 
            {Messegee[0].email}
            </div>
          <MessagesBox>
         <text>  {Messegee[0].messege}</text> 
          </MessagesBox>   </div>
         
          <Btn onClick={ Dattaaa } >Mark as Seen</Btn>

        </SubMessagesContainer>




      </MessagesContainer>












      <UserinfoContainer>


      </UserinfoContainer>

    </AppContainer>)
}

export default Admin
