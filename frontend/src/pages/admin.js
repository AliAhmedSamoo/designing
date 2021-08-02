import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'

const AppContainer = styled.div`
  
 background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 100%;
  display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const CarrequestsContainer = styled.div`
  
background: #000;
    width: 80%;
    height: 500px;
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
    border-radius: 20px;
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

function Admin() {




  const [Messegee, setMessegee] = useState()

  const [Car, setCar] = useState()

  

  useEffect(() => {
var requestOptions = {
  method: 'GET',
  
  redirect: 'follow'
};

fetch("http://localhost:5000/messegesforadmin", requestOptions)
.then(res => res.json())
 
.then(result => setMessegee(result))

 .catch(error => console.log('error', error));
 
  
});





useEffect(() => {
var requestOptions = {
  method: 'GET',
  
  redirect: 'follow'
};

fetch("/getcarreqdata", requestOptions)
  .then(res => res.json())
 
 .then(result => setCar(result))
 
  .catch(error => console.log('error', error));
  
});

  return (
    <AppContainer>
      <CarrequestsContainer><div >
        <h1>admin </h1>
      </div></CarrequestsContainer>













      <MessagesContainer>

        <SubMessagesContainer >
         
        <div>  <div>Name : 
         {/* {Messegee.[0].name} */}
          </div>
          <div>Email : 
            {/* {Messegee.email} */}
            </div>
          <MessagesBox>
            {/* {Messegee.email} */}
          </MessagesBox>   </div>
         
          <Btn >Mark as Seen</Btn>

        </SubMessagesContainer>




      </MessagesContainer>












      <UserinfoContainer>


      </UserinfoContainer>

    </AppContainer>)
}

export default Admin
