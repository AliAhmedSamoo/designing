import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { Select, Form, Input, Button,Image, message } from 'antd';
import {Btn} from '../components/Button'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/index';



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

const Offers = styled.div`
  
//background: #000;
    width: 80%;
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
    width: 80%;
    height: 160px;
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
    width: 80%;
    height: 600px;
    display: grid;
    overflow-y: scroll;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    align-items: center;
    justify-content: center;
    margin: 30px;
    border-radius: 5px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    justify-content: center;
      
    
    }
 
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
  
  const [Car, setCar] = useState([""])
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };
  
  
    fetch("/getdatafromCarlist", requestOptions)
    .then(res => res.json())

    .then(result => setCar(result))

    .catch(error => console.log('error', error));


},5000)
const [Searchvalue, setSearchvalue] = useState("")

let name, value;
  const handleInputs = (e) => {
    
    name = e.target.name;
    value = e.target.value;

    setSearchvalue({ ...Searchvalue, [name]: value });
  }
  


  const onFinish = () => {
    console.log("Search  ", Searchvalue);

  }

console.log("Car data ", Car);
const myImg = '../Carimages/logo512.png'

const Path = "Carimages/"
const email = localStorage.getItem('email')

  return (
    <> <Navbar/> 
    <AppContainer>

      <Offers>

        <Carousel justify-content='center' align-items='center'>
          <Itemcar> <img src="https://www.classiccar.com.pk/wp-content/uploads/2020/09/classic_car_banner-2.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
          <Itemcar>  <img src="https://www.honda.com.pk/wp-content/uploads/2020/11/Online-order-webbanner.webp" width="100%" height="100%" alt="bmw" /> </Itemcar>
          <Itemcar> <img src="https://d12ou7vikjr9w.cloudfront.net/wp-content/uploads/2019/11/21125343/Honda-2019CivicSedan.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
        </Carousel>
      </Offers>


      <Search>
        <Form onFinish={onFinish}>
        
          <Searchbarandbtn>  <Input type="text" name="search" onChange={handleInputs} required="true" placeholder="Search Car ( e.g: Car company name, Owername , Car model )" />
    
        
            
            
            <Button type="primary" htmlType="submit">Search</Button></Searchbarandbtn>
        

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

       localStorage.setItem('Carr._id', Carr._id );
       localStorage.setItem('Carr.Carname', Carr.Carname );
       localStorage.setItem('Carr.Model', Carr.Model );
       localStorage.setItem('Carr.username', Carr.username );
       localStorage.setItem(' Carr.number', Carr.number );
       localStorage.setItem('Carrpricee', Carr.price );
       localStorage.setItem('Carr.image', Carr.image );
       localStorage.setItem('Car Onwer email', Carr.email );








     }}>book Now</Btn> </Link></>}
     
     
     {email === "null" && <> <Link onClick={()=>{message.error("You need to Sign in to Book a car")}}> <Btn> book Now</Btn> </Link></>}  
     
     
     
     
     
     
     
     
     
     
     
     
      </div> </Cardetails>
      <Image src={Path+Carr.image} alt="Hondacivic" width='50%' height='96%' />
    
      
      </Carchart>

      ))}
      </Carlist>

    </AppContainer>
 
 </>
  );
};

export default Services;
