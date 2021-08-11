import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Btn } from '../components/Button'
import { Carbox } from '../components/Carbox'
import { Image, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { storage } from "../firebase";
import { useHistory } from 'react-router-dom'


const AppContainer = styled.div`
  
//background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
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
   height: auto;
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
  
// background: #000;
width: 80%;
height: auto;
max-height: 300px;
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



const UserinfoContainer1 = styled.div`
  
// background: #000;
width: 80%;
height: auto;
max-height: 300px;
overflow-y: scroll;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
// align-items: center;
// justify-content: center;
margin: 30px;
border-radius: 5px;
box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
align-items: center;
justify-content: center;
`;




const Carchart = styled.div`
  
box-shadow: 0px 0px 2px 5px;
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



const Cardetails1 = styled.p`
  
  // background: #000;
    width: 45%;
    height: 180px;
    display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    justify-content: center;
   
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 7px;
      height: 100px;
      // margin-top: 2px;
      // margin-left: 10px;
    
    }
  
 
`;






function Admin() {

  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }
  const [Totalcars, setTotalcars] = useState([])
  const [Totaluser, setTotaluser] = useState([])
  const [Messegee, setMessegee] = useState([])
  const history = useHistory();
  const [Car, setCar] = useState([])

  useEffect(async () => {

    const requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };

    fetch("https://rent-a-car-pakistan.herokuapp.com/messegesforadmintoshow", requestOptions)


      .then(res => res.json()
        // console.log(res)
      )
      .then(result => setMessegee(result))

      .catch(error => console.log('error', error));




    fetch("https://rent-a-car-pakistan.herokuapp.com/getcarreqdata", requestOptions)
      .then(res => res.json())

      .then(result => setCar(result))

      .catch(error => console.log('error', error));








    var requestOptions1 = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://rent-a-car-pakistan.herokuapp.com/getalluserdata", requestOptions1)
      .then(response => response.json())
      .then(result => setTotaluser(result))
      .catch(error => console.log('error', error));




    fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromCarlist", requestOptions1)
      .then(response => response.json())
      .then(result => setTotalcars(result))
      .catch(error => console.log('error', error));




  }, 10000000)



  console.log("Car data ", Car);
  console.log("Messege", Messegee);
  console.log("Messege", Totaluser);

  const [email, setemail] = useState(localStorage.getItem('email'));

  const Path = "Carimages/"

  
  
  
  useEffect(async () => {
   if (localStorage.getItem('email') !== "null" ) {
   
    var h = new Headers();
    h.append("Content-Type", "application/json");
    
    var r = JSON.stringify({
      "email": localStorage.getItem('email')
    });
    
    var re = {
      method: 'POST',
      headers: h,
      body: r,
      redirect: 'follow'
    };
    
    const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/checkuserispresent", re)
      
  if (res.status === 422) {
  
  
    localStorage.setItem('email','null')
     message.info("your account has been deleted by admin")
     await history.push("/");
  }
  
}
  }, 10000000) 





  return (
    <>  {email === "aliahmed.samoo.1@gmail.com" && <> <Navbar /><div style={({ height: `80px` })}> </div>
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

                <Btn onClick={async () => {

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

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/saverecartolistdb", requestOptions)
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

                  const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/deletecarreqdata", reqs)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.info("Car accepted and will be shown in Car list");
                  console.log("Car accepted and will be shown in Car list");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/getcarreqdata", Options)


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

                    const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/deletecarreqdatarejectedcar", requestOptions)
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

                    await fetch("https://rent-a-car-pakistan.herokuapp.com/getcarreqdata", Options)


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

                  onClick={async () => {

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

                    await fetch("https://rent-a-car-pakistan.herokuapp.com/messegesforadmin", requestOptions)
                      .then(response => response.text())
                      .then(result => console.log(result))
                      .catch(error => console.log('error', error));






                    message.success("Messege seen");
                    console.log("Messege seen");

                    var request = {
                      method: 'GET',

                      redirect: 'follow'
                    };

                    await fetch("https://rent-a-car-pakistan.herokuapp.com/messegesforadmintoshow", request)


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

          {Totaluser.map((Userr) => (<>

            <Carchart><Cardetails1>
              <div>
                <h1> {Userr.name}</h1>
                <h2> {Userr.email}</h2>
                <Btn onClick={async () => {

                  var myHeaders1 = new Headers();
                  myHeaders1.append("Content-Type", "application/json");

                  var raw1 = JSON.stringify({
                    "_id": Userr._id,

                  });

                  var requestOptions1 = {
                    method: 'POST',
                    headers: myHeaders1,
                    body: raw1,
                    redirect: 'follow'
                  };

                  await fetch("https://rent-a-car-pakistan.herokuapp.com/deleteUserrdattaaa", requestOptions1)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));






                  message.info("User removed");
                  console.log("User removed");

                  const Options = {
                    method: 'GET',

                    redirect: 'follow'
                  };

                  fetch("https://rent-a-car-pakistan.herokuapp.com/getalluserdata", Options)
                  .then(response => response.json())
                  .then(result => setTotaluser(result))
                  .catch(error => console.log('error', error));









                }}> Remove user</Btn>
              </div>
            </Cardetails1>   </Carchart> </>))}

        </UserinfoContainer>
































        <CarrequestsContainer>


          {Totalcars.map((Carr, index) => (
            <Carchart><Cardetails>
              <div>
                <h2>{Carr.Carname}</h2>
                <h5>Model: {Carr.Model}</h5>
                <h5>Rs. {Carr.price}/day</h5>
                <h5>Owner Name: {Carr.username}</h5>
                <h5>Onwer Phone: 03{Carr.number}</h5>




                <Btn value="Delete"
                  onClick={async () => {


                    //  console.log(Car)
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                      "_id": Carr._id,

                    });

                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: raw,
                      redirect: 'follow'
                    };

                    await fetch("https://rent-a-car-pakistan.herokuapp.com/deletecarcardattaaa", requestOptions)
                      .then(response => response.text())
                      .then(result => console.log(result))
                      .catch(error => console.log('error', error));






                    message.info("Car removed");
                    console.log("Car removed");

                    const Options = {
                      method: 'GET',

                      redirect: 'follow'
                    };

                    await fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromCarlist", Options)
                      .then(response => response.json())
                      .then(result => setTotalcars(result))
                      .catch(error => console.log('error', error));







                  }}




                >   Remove Car    </Btn>


              </div> </Cardetails>


              <Image src={Carr.image} alt="Hondacivic" width='50%' height='96%' />


            </Carchart>

          ))}



        </CarrequestsContainer>




















      </AppContainer>

    </>}
      {email === "null" && <AppContainer> <div width='100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }

      {email !== "aliahmed.samoo.1@gmail.com" && <AppContainer> <div width='100px' >  Page Not fund  <Link to="/home"> home</Link> </div>  </AppContainer>
      }
    </>

  )
}

export default Admin
