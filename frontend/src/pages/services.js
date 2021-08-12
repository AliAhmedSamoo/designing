import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Carousel } from 'antd';
import { Select, Form, Input, Button, Image, message } from 'antd';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';

import banner1 from "../banners/forcarlistpage/1.png"
import banner2 from "../banners/forcarlistpage/2.png"
import banner3 from "../banners/forcarlistpage/3.png"
import banner4 from "../banners/forcarlistpage/4.png"
import banner5 from "../banners/forcarlistpage/5.png"
import banner6 from "../banners/forcarlistpage/6.png"




const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
  width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const Offers = styled.div`
  
//background: #000;
    width: 100%;
    height: 200px;
    //display: grid;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 30px;
    @media screen and (max-width: 768px) {
     display: none;
    }
  
 
`;


const Search = styled.div`
  
//background: #000;
    width: 90%;
    height: auto;
    // display: flex;
   // grid-template-columns: auto;
  //  grid-gap: 10px;
    flex-direction: colunm;
     align-items: center;
    justify-content: center;
    margin: 30px;
   
    // border-radius: 5px;
    // box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const Carlist = styled.div`
  
//background: #000;
    width: 90%;
    height: auto;
    max-height: 500px;
    display: grid;
    overflow-x: hidden;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    justify-content: center;
      
    
    }
 
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

const Searchbarandbtn = styled.p`
  
  
    width: 100%;
    
    display: flex;
   
    flex-direction: row;
     
   
   
    
    
  
  
 
`;


const Itemcar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  background-color: #00008B;
  //color: #fff;
  margin: 1px;
  @media screen and (max-width: 768px) {
    width: 80%;
    
    height: 100px;
   
  
  }
`;


const Services = () => {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null ){ localStorage.setItem('email','null')   }
  const [Car, setCar] = useState([""])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };


    fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromCarlist", requestOptions)
      .then(res => res.json())

      .then(result => setCar(result))

      .catch(error => console.log('error', error));


  }, 5000)
  const [Searchvalue, setSearchvalue] = useState("")

  
  const handleInputs = (e) => {
    setSearchvalue(e.target.value);
  }



  const onFinish = async() => {
    // console.log("Search  ", Searchvalue);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw1 = JSON.stringify({
      "Carname": Searchvalue
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw1,
      redirect: 'follow'
    };

   const res1 = await fetch("https://rent-a-car-pakistan.herokuapp.com/searchardataaa", requestOptions)
   
   if(res1.status === 200 ){ 
     
    res1.json().then(result => setCar(result))   
    setSearchvalue()
  }
   else{   
     
    var raw2 = JSON.stringify({
      "email": Searchvalue
    });

    var requestOptions2 = {
      method: 'POST',
      headers: myHeaders,
      body: raw2,
      redirect: 'follow'
    };

   const res2 = await fetch("https://rent-a-car-pakistan.herokuapp.com/searchardataaa", requestOptions2)
   if(res2.status === 200 ){ 
     
    res2.json().then(result => setCar(result)) 
    setSearchvalue()
  }
  else{   
     
    var raw3 = JSON.stringify({
      "Model": Searchvalue
    });

    var requestOptions3 = {
      method: 'POST',
      headers: myHeaders,
      body: raw3,
      redirect: 'follow'
    };

   const res3 = await fetch("https://rent-a-car-pakistan.herokuapp.com/searchardataaa", requestOptions3)
   if(res3.status === 200 ){ 
     
    res3.json().then(result => setCar(result))
    setSearchvalue()
  }
  else{   
     
    var raw4 = JSON.stringify({
      "username": Searchvalue
    });

    var requestOptions4 = {
      method: 'POST',
      headers: myHeaders,
      body: raw4,
      redirect: 'follow'
    };

   const res4 = await fetch("https://rent-a-car-pakistan.herokuapp.com/searchardataaa", requestOptions4)
   if(res4.status === 200 ){ 
    setSearchvalue()
    res4.json().then(result => setCar(result))
  
  }

  else{   
     var xx = (Searchvalue[2]+ Searchvalue[3]+ Searchvalue[4] + Searchvalue[5] + Searchvalue[6] + Searchvalue[7] + Searchvalue[8]  + Searchvalue[9] + Searchvalue[10])
    //  var i= 2;
    //  for ( i  ; i == 0; i=i+1) {
    //   var xx;
    //   var xx =xx + (Searchvalue[i]


    //  }
    
    
    
     console.log(xx)
    var raw5 = JSON.stringify({
      "number": xx
    });

    var requestOptions5 = {
      method: 'POST',
      headers: myHeaders,
      body: raw5,
      redirect: 'follow'
    };

   const res5 = await fetch("https://rent-a-car-pakistan.herokuapp.com/searchardataaa", requestOptions5)
   if(res5.status === 200 ){ 
    setSearchvalue()
    res5.json().then(result => setCar(result))
  
  }else { message.info("Car not fund please enter valid Car model or Car company name or owner name or owners number")  }



  }}}}}

  console.log("Car data ", Car);
  const myImg = '../Carimages/logo512.png'

  const Path = "Carimages/"
  const email = localStorage.getItem('email')

  return (
    <> <Navbar /><div style={({  height: `80px` })}> </div>

<div style={({ height: `10px` })}> </div>
<Carousel autoplay>
  <div>
  
   <img src={banner1} width="100%" height="100%"  alt="banner 1" /> 
  </div>
  <div>
  
   <img src={banner2} width="100%" height="100%" alt="banner2" /> 
  </div>
  <div>
  
   <img src={banner3} width="100%" height="100%" alt="banner 3" /> 
  </div>
  <div>
  
   <img src={banner4} width="100%" height="100%" alt="banner 4" /> 
  </div>

  <div>
  
   <img src={banner5} width="100%" height="100%" alt="banner 5" /> 
  </div>

  <div>
  
   <img src={banner6} width="100%" height="100%" alt="banner 6" /> 
  </div>

  
</Carousel>


      <AppContainer>
      
     
    
   


        <Search>
          <Form onFinish={onFinish}>

            <Searchbarandbtn>  <Input type="text" name="search" value={Searchvalue} onChange={handleInputs} required="true" placeholder="Search Car ( e.g: Car company name, Owername , Car model )" />


              <Btn type="primary" htmlType="submit">Search</Btn></Searchbarandbtn>


          </Form>
        </Search>


        <Carlist>
          {Car.map((Carr, index) => (
            <Carchart><Cardetails>
              <div>
                <h2>{Carr.Carname}</h2>
                <h5>Model: {Carr.Model}</h5>
                <h5>Rs. {Carr.price}/day</h5>
                <h5>Owner Name: {Carr.username}</h5>
                <h5>Onwer Phone: 03{Carr.number}</h5>

                {email !== "null" && <> <Link to="/bookingform"> <Btn onClick={() => {
                  console.log("btn clicked")

                  localStorage.setItem('Carr._id', Carr._id);
                  localStorage.setItem('Carr.Carname', Carr.Carname);
                  localStorage.setItem('Carr.Model', Carr.Model);
                  localStorage.setItem('Carr.username', Carr.username);
                  localStorage.setItem(' Carr.number', Carr.number);
                  localStorage.setItem('Carrpricee', Carr.price);
                  localStorage.setItem('Carr.image', Carr.image);
                  localStorage.setItem('Car Onwer email', Carr.email);








                }}>Book now</Btn> </Link></>}


                {email === "null" && <> <Link onClick={() => { message.error("You need to Sign in to Book a car") }}> <Btn> Book now</Btn> </Link></>}












              </div> </Cardetails>
              <Image src={Carr.image} alt="Hondacivic" width='50%' height='96%' />


            </Carchart>

          ))}
        </Carlist>

      </AppContainer>

    </>
  );
};

export default Services;
