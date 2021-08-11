import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import { Carbox } from '../components/Carbox'
import { Image, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { storage } from "../firebase";



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
    height: 280px;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
  overflow-y: hidden;
    flex-direction: colunm;
     align-items: center;
     justify-content: center;
    margin: 100px;
  border-radius: 10px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const SubMessagesContainer = styled.div`
  
//background: #000;
margin: 10px;
    width: 90%;
    height: 280px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
//   display: flex;
// flex-direction: column;
// align-items: center;
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

  const emaillll = localStorage.getItem('email')
  if (emaillll === null ){ localStorage.setItem('email','null')   }


  const [Messegee, setMessegee] = useState([])

  const [Car, setCar] = useState([])

  useEffect(() => {

    const requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };

    fetch("/messegesforadmintoshow", requestOptions)


      .then(res => res.json()
        // console.log(res)
      )
      .then(result => setMessegee(result))

      .catch(error => console.log('error', error));




    fetch("/getcarreqdata", requestOptions)
      .then(res => res.json())

      .then(result => setCar(result))

      .catch(error => console.log('error', error));


  }, 10000000)



  console.log("Car data ", Car);
  console.log("Messege", Messegee);

  const [email, setemail] = useState(localStorage.getItem('email'));

const Path = "Carimages/"

  return (
    <>  {email === "aliahmed.samoo.1@gmail.com" && <> <Navbar/>
    <AppContainer >

      <CarrequestsContainer>


        {Car.map((Carr, index) => (
          <Carchart><Cardetails>
            <div>
              <h2>{Carr.Carname}</h2>
              <h5>Model: {Carr.Model}</h5>
              <h5>Rs. {Carr.price}/day</h5>
              <h5>Owner Name: {Carr.username}</h5>
              <h5>Onwer Phone: 03{Carr.number}</h5>

              <Btn onClick={() => {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                  "username": Carr.username,
                  "email": Carr.email,
                  "Carname": Carr.Carname,
                  "Model": Carr.Model,
                  "price": Carr.price,
                  "number": Carr.number,
                  "tag": Carr.tag,
                  "image": Carr.image
                });

                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
                };

                fetch("http://localhost:5000/saverecartolistdb", requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));




                  var newHeaders = new Headers();
                  newHeaders.append("Content-Type", "application/json");

                  var rawbody = JSON.stringify({
                    "_id": Carr._id
                  });

                  var reqs = {
                    method: 'POST',
                    headers: newHeaders,
                    body: rawbody,
                    redirect: 'follow'
                  };

                  const res = fetch("http://localhost:5000/deletecarreqdata", reqs )
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));


                



                  message.info("Car accepted and will be shown in Car list");
                  console.log("Car accepted and will be shown in Car list");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("/getcarreqdata", Options)


                    .then(res => res.json())

                    .then(result => setCar(result))

                    .catch(error => console.log('error', error));



              }}





              >Accept</Btn>






              <Btn value="Delete"
                onClick={async () => {


                  //  console.log(Car)
                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                    "_id": Carr._id,
                    "image": Carr.image
                  });

                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  const res = fetch("/deletecarreqdatarejectedcar", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));


                  console.log(res.status)

                  
                
                  message.info("Car Rejected");
                  console.log("Car Rejected");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("/getcarreqdata", Options)


                    .then(res => res.json())

                    .then(result => setCar(result))

                    .catch(error => console.log('error', error));







                }}




              >   Reject    </Btn>


            </div> </Cardetails>

            
            <Image src={Carr.image} alt="Hondacivic" width='50%' height='96%' />


          </Carchart>

        ))}



      </CarrequestsContainer>













      <MessagesContainer>

        <SubMessagesContainer >
          {Messegee.map((Messegee, index) => (

            <>

              <div> Name :
                {Messegee.name}
              </div>
              <div>  Email :
                {Messegee.email}
              </div>


              <MessagesBox>
                <h3> <text>  {Messegee.messege}</text></h3>
              </MessagesBox>

              <Btn

                onClick={() => {

                  var myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");

                  var raw = JSON.stringify({
                    "_id": Messegee._id
                  });

                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                  };

                  fetch("/messegesforadmin", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.success("Messege seen");
                  console.log("Messege seen");

                  var request = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("/messegesforadmintoshow", request)


                    .then(res => res.json()
                      // console.log(res)
                    )
                    .then(result => setMessegee(result))

                    .catch(error => console.log('error', error));




                }}






              >   Mark as Seen</Btn>

            </>))} : <h1>No new messege to show</h1>

        </SubMessagesContainer>




      </MessagesContainer>












      <UserinfoContainer>


      </UserinfoContainer>




    </AppContainer>

</>}
{email === "null" && <AppContainer> <div width= '100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
}

{email !== "null" && <AppContainer> <div width= '100px' >  Page Not fund  <Link to="/home"> home</Link> </div>  </AppContainer>
}
    </>

  )
}

export default Admin
