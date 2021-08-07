import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/index';
import { Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';


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


const ProfileContainer = styled.div`
  
//background: #000;
    width: 80%;
    height: 100%;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 5%;
    border-radius: 50px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const ProfileContainerleft = styled.div`
  
color : #fff;
    width: 100%;
    height: 300px;
    //background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
 
`;

const ProfileContainerright = styled.div`
  
//background-Size: 100%;
    width: 100%;
    height: 500px;
    //background: #888;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
   
    border-radius: 10px;
 
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
    
    margin-top: 40px;
   
    border-radius: 20px 20px 0px 0px;

    @media screen and (max-width: 768px) {
      width: 270px;
      height: 170px;
    
    }
   
  
 
`;

const Request = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 520px;
    height: 200px;
    display: flex;
    //grid-template-columns: auto auto auto auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    margin-bottom: 10px;
   
    border-radius: 0px 0px 20px 20px;

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

const Refreshlink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;


function Profile() {
  const username = localStorage.getItem('name')
  const useremail = localStorage.getItem('email')
  const [Requesttt, setRequesttt] = useState([])
  const [email, setemail] = useState(localStorage.getItem('email'));

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Useremail": useremail
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("/getrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequesttt(result))
      .catch(error => console.log('error', error))

  }, 50000)
  const Path = "Carimages/"
  console.log("Car booking requests",Requesttt)
  return (
    <>  {email !== "null" && <>  <Navbar />
      <AppContainer>
        <ProfileContainer> <ProfileContainerleft>

          <h1>User Name :</h1><h4>{username}</h4>
          <h1>Email:</h1><h4>{useremail}</h4>

        </ProfileContainerleft>

          <ProfileContainerright>
            <div>  {Requesttt.map(Req => (




              <>



                <Carchart> <Cardetails>
                  <div>

                    <h2> {Req.Carname}</h2>
                    <h5>Model: {Req.CarModel}</h5>
                    <h5>Rs. {Req.Carprice}/day</h5>
                    <h5>Owner Name: {Req.Carusername}</h5>
                    <h5>Onwer Phone: 03{Req.Carnumber}</h5>

                  </div> </Cardetails>
                  <Image src={Path+Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

                </Carchart>



                <Request>

                  <div>
                    <h4>  Name : {Req.Name} </h4>
                    <h4>   phone number: {Req.Phone}</h4>
                    <h4>  Address: {Req.Address}</h4>
                    <h4>  City: {Req.SelectedCity}</h4>
                    <h4> from: {Req.Date[0]}</h4>
                    <h4> to: {Req.Date[1]}</h4>



                  </div>
                  <div> <Btn>Accept</Btn>
                    <Btn>Reject</Btn></div>

                </Request>
              </>
            ))}</div>
          </ProfileContainerright>



        </ProfileContainer>

      </AppContainer>




    </>
  }
  {email === "null" && <AppContainer> <div width= '100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
  }
      </>)
}

export default Profile
