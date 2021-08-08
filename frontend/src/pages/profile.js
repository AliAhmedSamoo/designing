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


function Profile() {
  const username = localStorage.getItem('name')

  const [Requesttt, setRequesttt] = useState([])
  const [RequestttAccepted, setRequestttAccepted] = useState([])
  const [RequestttRejected, setRequestttRejected] = useState([])
  const [Requeststatus, setRequeststatus] = useState("null")
  const [Requeststatusa, setRequeststatusa] = useState("null")
  const [bookingg, setbookingg] = useState([])
  const [bookinggAccepted, setbookinggAccepted] = useState([])
  const [bookinggRejected, setbookinggRejected] = useState([])
  const email = localStorage.getItem('email');
  const [bookingfund, setbookingfund] = useState("false")
  const [requestfund, setrequestfund] = useState("false")

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

    fetch("/bookinggetrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookingg(result))
      .catch(error => console.log('error', error))

    fetch("/bookinggetAcceptedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookinggAccepted(result))
      .catch(error => console.log('error', error))

    fetch("/bookinggetRejectedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setbookinggRejected(result))
      .catch(error => console.log('error', error))



    checkbooking();
    // checkrequests();
  }, 5000)


  useEffect(async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Useremail": email
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("/getrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequesttt(result))
      .catch(error => console.log('error', error))


    await fetch("/getAcceptedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequestttAccepted(result))
      .catch(error => console.log('error', error))


    await fetch("/getRejectedrequestdata", requestOptions)
      .then(response => response.json())
      .then(result => setRequestttRejected(result))
      .catch(error => console.log('error', error))




    // await checkrequests();
    checkbooking();


  }, 5000)



  const checkbooking = () => {
    if (bookingg.length !== 0 || bookinggAccepted !== 0 || bookinggRejected !== 0) {


      setbookingfund("true");
    }
  }



  const Path = "Carimages/"

  console.log("today date is ", localStorage.getItem('today'))




  return (



    <>

      {email !== "null" && <>  <Navbar />
        <AppContainer>
          <ProfileContainer> <ProfileContainerleft>

            <h1>User Name :</h1><h4>{username}</h4>
            <h1>Email:</h1><h4>{email}</h4>

          </ProfileContainerleft>
            <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >




              {bookingg.length !== 0  && <>

                {Requeststatus === "yourBookingrequests" && <>  <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >your Booking Status </Btn></>}
                {Requeststatus === "RequeststoBookyourCars" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("yourBookingrequests"); setRequeststatusa("yourPending") }} > your Booking Status </Btn></>}
                {Requeststatus === "null" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("yourBookingrequests"); setRequeststatusa("yourPending") }} > your Booking Status </Btn></>}

              </>}


              {bookingg.length === 0 && <>


                {bookinggAccepted !== 0 && <>
                  {Requeststatus === "null" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}
                  {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Requests to Book your Cars </Btn></>}
                  {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}

                </>}
                {bookinggAccepted.length === 0 && <>
                  {bookinggRejected.length !== 0 && <>
                    {Requeststatus === "null" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}
                    {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Requests to Book your Cars </Btn></>}
                    {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}

                  </>}</>}</>}















              {Requesttt.length !== 0 && <>
                {Requeststatus === "null" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}
                {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }}  > Requests to Book your Cars </Btn></>}
                {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}

              </>}



              {Requesttt.length === 0 && <>


                {RequestttAccepted.length !== 0 && <>
                  {Requeststatus === "null" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}
                  {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }}  > Requests to Book your Cars </Btn></>}
                  {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}

                </>}
                {RequestttAccepted.length === 0 && <>
                  {RequestttRejected.length !== 0 && <>
                    {Requeststatus === "null" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}
                    {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }}  > Requests to Book your Cars </Btn></>}
                    {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending") }} > Requests to Book your Cars </Btn></>}

                  </>}</>}</>}











            </div>



            {Requeststatus === "RequeststoBookyourCars" && <>

              <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `50px` }} >
                {Requeststatusa === "Pending" && <>  <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request Pending </Btn></>}
                {Requeststatusa === "Accepted" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Pending") }} > Request Pending </Btn></>}
                {Requeststatusa === "rejected" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Pending") }} > Request Pending </Btn></>}



                {Requeststatusa === "Accepted" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request Accepted </Btn></>}
                {Requeststatusa === "rejected" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Accepted") }} > Request Accepted </Btn></>}
                {Requeststatusa === "Pending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Accepted") }} > Request Accepted </Btn></>}


                {Requeststatusa === "rejected" && <>   <Btn style={{ width: `50%`, background: `#888`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request rejected </Btn></>}
                {Requeststatusa === "Accepted" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("rejected") }} > Request rejected </Btn></>}
                {Requeststatusa === "Pending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("rejected") }} > Request rejected </Btn></>}


              </div>




              {Requeststatusa === "Pending" && <>
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

                        <Btuns > <Btn onClick={() => {

                          var newHeaders = new Headers();
                          newHeaders.append("Content-Type", "application/json");

                          var rawbody = JSON.stringify({
                            "_id": Req._id
                          });

                          var Options = {
                            method: 'POST',
                            headers: newHeaders,
                            body: rawbody,
                            redirect: 'follow'
                          };

                          fetch("/acceptingbookingreqdata", Options)
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));



                          message.info("Request Rejected");
                          console.log("Request Rejected");



                          var bodyy = JSON.stringify({
                            "Useremail": email
                          });

                          var request = {
                            method: 'POST',
                            headers: newHeaders,
                            body: bodyy,
                            redirect: 'follow'
                          };

                          fetch("/getrequestdata", request)
                            .then(response => response.json())
                            .then(result => setRequesttt(result))
                            .catch(error => console.log('error', error))

                          fetch("/getAcceptedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setRequestttAccepted(result))
                            .catch(error => console.log('error', error))

                          fetch("/getRejectedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setRequestttRejected(result))
                            .catch(error => console.log('error', error))




                        }}>Accept</Btn>
                          <Btn onClick={() => {

                            var newHeaders = new Headers();
                            newHeaders.append("Content-Type", "application/json");

                            var rawbody = JSON.stringify({
                              "_id": Req._id
                            });

                            var Options = {
                              method: 'POST',
                              headers: newHeaders,
                              body: rawbody,
                              redirect: 'follow'
                            };

                            fetch("/deletebookingreqdata", Options)
                              .then(response => response.text())
                              .then(result => console.log(result))
                              .catch(error => console.log('error', error));



                            message.info("Request Rejected");
                            console.log("Request Rejected");



                            var bodyy = JSON.stringify({
                              "Useremail": email
                            });

                            var request = {
                              method: 'POST',
                              headers: newHeaders,
                              body: bodyy,
                              redirect: 'follow'
                            };

                            fetch("/getrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequesttt(result))
                              .catch(error => console.log('error', error))

                            fetch("/getAcceptedrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequestttAccepted(result))
                              .catch(error => console.log('error', error))

                            fetch("/getRejectedrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequestttRejected(result))
                              .catch(error => console.log('error', error))





                          }}>Reject</Btn></Btuns>

                      </Request>
                    </>
                  ))}

                  </div>
                </ProfileContainerright></>}


              {Requeststatusa === "Accepted" && <>

                <ProfileContainerright>
                  <div>  {RequestttAccepted.map(Req => (




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

                          <img width='70%' height='100px' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw' />




                          <Btn onClick={() => {

                            var newHeaders = new Headers();
                            newHeaders.append("Content-Type", "application/json");

                            var rawbody = JSON.stringify({
                              "_id": Req._id
                            });

                            var Options = {
                              method: 'POST',
                              headers: newHeaders,
                              body: rawbody,
                              redirect: 'follow'
                            };

                            fetch("/donebookingreqdata", Options)
                              .then(response => response.text())
                              .then(result => console.log(result))
                              .catch(error => console.log('error', error));



                            message.info("Request done");
                            console.log("Request done");



                            var bodyy = JSON.stringify({
                              "Useremail": email
                            });

                            var request = {
                              method: 'POST',
                              headers: newHeaders,
                              body: bodyy,
                              redirect: 'follow'
                            };

                            fetch("/getrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequesttt(result))
                              .catch(error => console.log('error', error))

                            fetch("/getAcceptedrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequestttAccepted(result))
                              .catch(error => console.log('error', error))

                            fetch("/getRejectedrequestdata", request)
                              .then(response => response.json())
                              .then(result => setRequestttRejected(result))
                              .catch(error => console.log('error', error))







                          }}>Done</Btn></Btuns>

                      </Request>
                    </>
                  ))}

                  </div>
                </ProfileContainerright>


              </>}








              {Requeststatusa === "rejected" && <>

                <ProfileContainerright>
                  <div>  {RequestttRejected.map(Req => (




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

                          <img width="40%" src=' https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png' />
                        </Btuns>

                      </Request>
                    </>
                  ))}

                  </div>
                </ProfileContainerright>


              </>}



            </>}





























            {Requeststatus === "yourBookingrequests" && <>







              <ProfileContainerright>
                <div>  {bookingg.map(Req => (




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

                        <img width="50%" src='pending.png' />

                        <Btn onClick={() => {

                          var newHeaders = new Headers();
                          newHeaders.append("Content-Type", "application/json");

                          var rawbody = JSON.stringify({
                            "_id": Req._id
                          });

                          var Options = {
                            method: 'POST',
                            headers: newHeaders,
                            body: rawbody,
                            redirect: 'follow'
                          };

                          fetch("/deletebookingdata", Options)
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));



                          message.info("booking Cancel");
                          console.log("Request Rejected");



                          var bodyy = JSON.stringify({
                            "email": email
                          });

                          var request = {
                            method: 'POST',
                            headers: newHeaders,
                            body: bodyy,
                            redirect: 'follow'
                          };

                          fetch("/bookinggetrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookingg(result))
                            .catch(error => console.log('error', error))

                          fetch("/bookinggetAcceptedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookinggAccepted(result))
                            .catch(error => console.log('error', error))

                          fetch("/bookinggetRejectedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookinggRejected(result))
                            .catch(error => console.log('error', error))





                        }}>Cancel</Btn></Btuns>

                    </Request>
                  </>
                ))}

                </div>









                <div>  {bookinggAccepted.map(Req => (




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

                        <img width='70%' height='100px' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw' />




                        <Btn onClick={() => {

                          var newHeaders = new Headers();
                          newHeaders.append("Content-Type", "application/json");

                          var rawbody = JSON.stringify({
                            "_id": Req._id
                          });

                          var Options = {
                            method: 'POST',
                            headers: newHeaders,
                            body: rawbody,
                            redirect: 'follow'
                          };

                          fetch("/donebookingreqdata", Options)
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));



                          message.info("Request done");
                          console.log("Request done");



                          var bodyy = JSON.stringify({
                            "Useremail": email
                          });

                          var request = {
                            method: 'POST',
                            headers: newHeaders,
                            body: bodyy,
                            redirect: 'follow'
                          };

                          fetch("/bookinggetrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookingg(result))
                            .catch(error => console.log('error', error))

                          fetch("/bookinggetAcceptedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookinggAccepted(result))
                            .catch(error => console.log('error', error))

                          fetch("/bookinggetRejectedrequestdata", request)
                            .then(response => response.json())
                            .then(result => setbookinggRejected(result))
                            .catch(error => console.log('error', error))







                        }}>Done</Btn></Btuns>

                    </Request>
                  </>
                ))}

                </div>














                <div>  {bookinggRejected.map(Req => (




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

                        <img width="40%" src=' https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png' />
                      </Btuns>

                    </Request>
                  </>
                ))}

                </div>
              </ProfileContainerright>






            </>}









          </ProfileContainer>

        </AppContainer>




      </>
      }
      {
        email === "null" && <AppContainer> <div width='100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }
    </>)
}










































//     <>  {email !== "null" && <>  <Navbar />
//       <AppContainer>
//         <ProfileContainer> <ProfileContainerleft>

//           <h1>User Name :</h1><h4>{username}</h4>
//           <h1>Email:</h1><h4>{email}</h4>

//         </ProfileContainerleft>
//           <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >
//             {Requeststatus === "yourBookingrequests" && <>  <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} >your Booking Status </Btn></>}
//             {Requeststatus === "RequeststoBookyourCars" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("yourBookingrequests"); setRequeststatusa("yourPending") }} > your Booking Status </Btn></>}



//             {Requeststatus === "RequeststoBookyourCars" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Requests to Book your Cars </Btn></>}
//             {Requeststatus === "yourBookingrequests" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatus("RequeststoBookyourCars"); setRequeststatusa("Pending")  }} > Requests to Book your Cars </Btn></>}



//           </div>



//           {Requeststatus === "RequeststoBookyourCars" && <>

//             <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `50px` }} >
//               {Requeststatusa === "Pending" && <>  <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request Pending </Btn></>}
//               {Requeststatusa === "Accepted" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Pending") }} > Request Pending </Btn></>}
//               {Requeststatusa === "rejected" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Pending") }} > Request Pending </Btn></>}



//               {Requeststatusa === "Accepted" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request Accepted </Btn></>}
//               {Requeststatusa === "rejected" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Accepted") }} > Request Accepted </Btn></>}
//               {Requeststatusa === "Pending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("Accepted") }} > Request Accepted </Btn></>}


//               {Requeststatusa === "rejected" && <>   <Btn style={{ width: `50%`, background: `#888`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Request rejected </Btn></>}
//               {Requeststatusa === "Accepted" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("rejected") }} > Request rejected </Btn></>}
//               {Requeststatusa === "Pending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("rejected") }} > Request rejected </Btn></>}


//             </div>
//             {Requeststatusa === "Pending" && <>
//               <ProfileContainerright>
//                 <div>  {Requesttt.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns > <Btn onClick={() => {

//                         var newHeaders = new Headers();
//                         newHeaders.append("Content-Type", "application/json");

//                         var rawbody = JSON.stringify({
//                           "_id": Req._id
//                         });

//                         var Options = {
//                           method: 'POST',
//                           headers: newHeaders,
//                           body: rawbody,
//                           redirect: 'follow'
//                         };

//                         fetch("/acceptingbookingreqdata", Options)
//                           .then(response => response.text())
//                           .then(result => console.log(result))
//                           .catch(error => console.log('error', error));



//                         message.info("Request Rejected");
//                         console.log("Request Rejected");



//                         var bodyy = JSON.stringify({
//                           "Useremail": email
//                         });

//                         var request = {
//                           method: 'POST',
//                           headers: newHeaders,
//                           body: bodyy,
//                           redirect: 'follow'
//                         };

//                         fetch("/getrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setRequesttt(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/getAcceptedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setRequestttAccepted(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/getRejectedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setRequestttRejected(result))
//                           .catch(error => console.log('error', error))




//                       }}>Accept</Btn>
//                         <Btn onClick={() => {

//                           var newHeaders = new Headers();
//                           newHeaders.append("Content-Type", "application/json");

//                           var rawbody = JSON.stringify({
//                             "_id": Req._id
//                           });

//                           var Options = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: rawbody,
//                             redirect: 'follow'
//                           };

//                           fetch("/deletebookingreqdata", Options)
//                             .then(response => response.text())
//                             .then(result => console.log(result))
//                             .catch(error => console.log('error', error));



//                           message.info("Request Rejected");
//                           console.log("Request Rejected");



//                           var bodyy = JSON.stringify({
//                             "Useremail": email
//                           });

//                           var request = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: bodyy,
//                             redirect: 'follow'
//                           };

//                           fetch("/getrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequesttt(result))
//                             .catch(error => console.log('error', error))

//                           fetch("/getAcceptedrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequestttAccepted(result))
//                             .catch(error => console.log('error', error))

//                           fetch("/getRejectedrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequestttRejected(result))
//                             .catch(error => console.log('error', error))





//                         }}>Reject</Btn></Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright></>}


//             {Requeststatusa === "Accepted" && <>

//               <ProfileContainerright>
//                 <div>  {RequestttAccepted.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns >

//                         <img width='70%' height='100px' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw' />




//                         <Btn onClick={() => {

//                           var newHeaders = new Headers();
//                           newHeaders.append("Content-Type", "application/json");

//                           var rawbody = JSON.stringify({
//                             "_id": Req._id
//                           });

//                           var Options = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: rawbody,
//                             redirect: 'follow'
//                           };

//                           fetch("/donebookingreqdata", Options)
//                             .then(response => response.text())
//                             .then(result => console.log(result))
//                             .catch(error => console.log('error', error));



//                           message.info("Request done");
//                           console.log("Request done");



//                           var bodyy = JSON.stringify({
//                             "Useremail": email
//                           });

//                           var request = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: bodyy,
//                             redirect: 'follow'
//                           };

//                           fetch("/getrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequesttt(result))
//                             .catch(error => console.log('error', error))

//                           fetch("/getAcceptedrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequestttAccepted(result))
//                             .catch(error => console.log('error', error))

//                           fetch("/getRejectedrequestdata", request)
//                             .then(response => response.json())
//                             .then(result => setRequestttRejected(result))
//                             .catch(error => console.log('error', error))







//                         }}>Done</Btn></Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright>


//             </>}








//             {Requeststatusa === "rejected" && <>

//               <ProfileContainerright>
//                 <div>  {RequestttRejected.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns >

//                         <img width="40%" src=' https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png' />
//                       </Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright>


//             </>}



//           </>}





























//           {Requeststatus === "yourBookingrequests" && <>

//             <div style={{ height: `120%`, width: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `50px` }} >
//               {Requeststatusa === "yourPending" && <>  <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Your Pending Request </Btn></>}
//               {Requeststatusa === "yourAccepted" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourPending") }} > Your Pending Request </Btn></>}
//               {Requeststatusa === "yourrejected" && <>  <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourPending") }} > Your Pending Request </Btn></>}



//               {Requeststatusa === "yourAccepted" && <>   <Btn style={{ width: `50%`, background: `#999`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Your Accepted Request </Btn></>}
//               {Requeststatusa === "yourrejected" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourAccepted") }} > Your Accepted Request </Btn></>}
//               {Requeststatusa === "yourPending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourAccepted") }} > Your Accepted Request </Btn></>}


//               {Requeststatusa === "yourrejected" && <>   <Btn style={{ width: `50%`, background: `#888`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} > Your Pending Request </Btn></>}
//               {Requeststatusa === "yourAccepted" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourrejected") }} > Your rejected Request </Btn></>}
//               {Requeststatusa === "yourPending" && <>   <Btn style={{ width: `50%`, height: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center` }} onClick={() => { setRequeststatusa("yourrejected") }} > Your rejected Request </Btn></>}


//             </div>




//             {Requeststatusa === "yourPending" && <>
//               <ProfileContainerright>
//                 <div>  {bookingg.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns > 

//                      <img width="50%" src='pending.png' />

//                         <Btn onClick={() => {

//                           var newHeaders = new Headers();
//                           newHeaders.append("Content-Type", "application/json");

//                           var rawbody = JSON.stringify({
//                             "_id": Req._id
//                           });

//                           var Options = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: rawbody,
//                             redirect: 'follow'
//                           };

//                           fetch("/deletebookingdata", Options)
//                             .then(response => response.text())
//                             .then(result => console.log(result))
//                             .catch(error => console.log('error', error));



//                           message.info("booking Cancel");
//                           console.log("Request Rejected");



//                           var bodyy = JSON.stringify({
//                             "email": email
//                           });

//                           var request = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: bodyy,
//                             redirect: 'follow'
//                           };

//                           fetch("/bookinggetrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookingg(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/bookinggetAcceptedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookinggAccepted(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/bookinggetRejectedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookinggRejected(result))
//                           .catch(error => console.log('error', error))





//                         }}>Cancel</Btn></Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright></>}





//             {Requeststatusa === "yourAccepted" && <>

//               <ProfileContainerright>
//                 <div>  {bookinggAccepted.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns >

//                         <img width='70%' height='100px' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw' />




//                         <Btn onClick={() => {

//                           var newHeaders = new Headers();
//                           newHeaders.append("Content-Type", "application/json");

//                           var rawbody = JSON.stringify({
//                             "_id": Req._id
//                           });

//                           var Options = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: rawbody,
//                             redirect: 'follow'
//                           };

//                           fetch("/donebookingreqdata", Options)
//                             .then(response => response.text())
//                             .then(result => console.log(result))
//                             .catch(error => console.log('error', error));



//                           message.info("Request done");
//                           console.log("Request done");



//                           var bodyy = JSON.stringify({
//                             "Useremail": email
//                           });

//                           var request = {
//                             method: 'POST',
//                             headers: newHeaders,
//                             body: bodyy,
//                             redirect: 'follow'
//                           };

//                           fetch("/bookinggetrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookingg(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/bookinggetAcceptedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookinggAccepted(result))
//                           .catch(error => console.log('error', error))

//                         fetch("/bookinggetRejectedrequestdata", request)
//                           .then(response => response.json())
//                           .then(result => setbookinggRejected(result))
//                           .catch(error => console.log('error', error))







//                         }}>Done</Btn></Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright>


//             </>}








//             {Requeststatusa === "yourrejected" && <>

//               <ProfileContainerright>
//                 <div>  {bookinggRejected.map(Req => (




//                   <>



//                     <Carchart> <Cardetails>
//                       <div>

//                         <h2> {Req.Carname}</h2>
//                         <h5>Model: {Req.CarModel}</h5>
//                         <h5>Rs. {Req.Carprice}/day</h5>
//                         <h5>Owner Name: {Req.Carusername}</h5>
//                         <h5>Onwer Phone: 03{Req.Carnumber}</h5>

//                       </div> </Cardetails>
//                       <Image src={Path + Req.Carimage} alt="Hondacivic" width='50%' height='96%' />

//                     </Carchart>



//                     <Request>
//                       <Cardetails>
//                         <div>
//                           <h2>  Name : {Req.Name} </h2>
//                           <h5>   phone number: {Req.Phone}</h5>
//                           <h5>  Address: {Req.Address}</h5>
//                           <h5>  City: {Req.SelectedCity}</h5>
//                           <h5> from: {Req.Date[0]}</h5>
//                           <h5> to: {Req.Date[1]}</h5>



//                         </div></Cardetails>

//                       <Btuns >

//                         <img width="40%" src=' https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png' />
//                       </Btuns>

//                     </Request>
//                   </>
//                 ))}

//                 </div>
//               </ProfileContainerright>


//             </>}



//           </>}









//         </ProfileContainer>

//       </AppContainer>




//     </>
//     }
//       {
//         email === "null" && <AppContainer> <div width='100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
//       }
//     </>)
// }

export default Profile


// https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29fee25b-bde5-448c-8405-4076545dcda4/d4atiy0-d0680677-cbe1-4a03-93e7-eef7c2ab7170.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZmVlMjViLWJkZTUtNDQ4Yy04NDA1LTQwNzY1NDVkY2RhNFwvZDRhdGl5MC1kMDY4MDY3Ny1jYmUxLTRhMDMtOTNlNy1lZWY3YzJhYjcxNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0ux9pCzXx3hE_hxqZZYBenfeVWBB6djIc7pX18olaw
// https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png  rejected