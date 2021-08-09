import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar/index';
import { Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';
import zIndex from '@material-ui/core/styles/zIndex';


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
   // background: #888;
     overflow-x: hidden;
     //display: flex;
     //flex-direction: row;
    //  align-items: top;
    //  justify-content: center;
   
    border-radius: 10px;
 
`;


const Carchart = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 98%;
    height: 200px;
    display: flex;
    //grid-template-columns: auto auto auto auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    margin-top: 40px;
    margin-left: 1%;
   
    border-radius: 20px 20px 0px 0px;

 
`;

const Request = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    width: 98%;
    height: 200px;
    display: flex;
    //grid-template-columns: auto auto auto auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 1%;
    
   
    border-radius: 0px 0px 20px 20px;
  
 
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
   
    @media screen and (max-width: 500px) {
      width: 80%;
      font-size: 10px;
      height: 100px;
      // margin-top: 2px;
       margin-left: 10px;
    
    }
  
 
`;

const Btuns = styled(Link)`
 height: 100%;
 width: 50%;
  display: flex;
  justify-content: center;
   align-items: center ;

   @media screen and (max-width: 500px) {
     height: 100%;
     width: 50%;
     display: grid;
     justify-content: center;
     align-items: center ;
  
  }
`;


function History() {
  const username = localStorage.getItem('name')

 
  const [Requeststatus, setRequeststatus] = useState("null")

  const [Historybooking, setHistorybooking] = useState([])
 
  const email = localStorage.getItem('email');


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  localStorage.setItem('today', yyyy + '-' + mm + '-' + dd);





  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("/donebookingdata", requestOptions)
      .then(response => response.json())
      .then(result => setHistorybooking(result))
      .catch(error => console.log('error', error))

   


  }, 5000)






  const Path = "Carimages/"

  console.log("today date is ", localStorage.getItem('today'))




  return (



    <>

      {email !== "null" && <>  <Navbar />
        <AppContainer>
          <ProfileContainer> <ProfileContainerleft>

            <h1><h3>{username}</h3></h1>
            <h1>Email:</h1><h3>{email}</h3>

          </ProfileContainerleft>
            <div style={{ height: `50px`, background: `#999`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >

              Your History
            </div>





              <ProfileContainerright>
                <div>  {Historybooking.map(Req => (




                  <>



                    <Carchart> <Cardetails>
                      <div>

                        <h2> {Req.Carname}</h2>
                        <h5>Model: {Req.CarModel}</h5>
                        <h5>Rs. {Req.Carprice}/day</h5>
                        <h5>Owner Name: {Req.Carusername}</h5>
                        <h5>Onwer Phone: 03{Req.Carnumber}</h5>

                      </div> </Cardetails>
                      <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

                    </Carchart>



                    <Request>
                      <Cardetails>
                        <div>
                          <h2>  Name : {Req.Name} </h2>
                          <h5>   phone number: {Req.Phone}</h5>
                          <h5>  Address: {Req.Address}</h5>
                          <h5>  City: {Req.SelectedCity}</h5>
                          <h5> from: {Req.Date[0]}</h5>
                          <h5> to: {Req.Date[1]}</h5>



                        </div></Cardetails>

                      <Btuns >

                        <img width="50%" src='done.png' />

                   
                        </Btuns>

                    </Request>
                  </>
                ))}

                </div>



          
              </ProfileContainerright>






           









          </ProfileContainer>

        </AppContainer>




      </>
      }
      {
        email === "null" && <AppContainer> <div width='100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }
    </>)



}


export default History


// https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw
// https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png  rejected