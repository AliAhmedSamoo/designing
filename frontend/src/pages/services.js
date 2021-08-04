import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { Select, Form, Input, Button,Image } from 'antd';
import {Btn} from '../components/Button'

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
  

console.log("Car data ", Car);
  
  
  return (
    <AppContainer>

      <Offers>

        <Carousel justify-content='center' align-items='center'>
          <Itemcar> <img src="https://www.classiccar.com.pk/wp-content/uploads/2020/09/classic_car_banner-2.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
          <Itemcar>  <img src="https://www.honda.com.pk/wp-content/uploads/2020/11/Online-order-webbanner.webp" width="100%" height="100%" alt="bmw" /> </Itemcar>
          <Itemcar> <img src="https://d12ou7vikjr9w.cloudfront.net/wp-content/uploads/2019/11/21125343/Honda-2019CivicSedan.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
        </Carousel>
      </Offers>


      <Search>
        <Form>
        <Form.Item>
            <Input placeholder="Search" />
    
        
            <Select
            mode="tags" style={{ width: '100%' }} placeholder="Tags "  >
            </Select>
            </Form.Item>
            <Form.Item>
            <Button type="primary">Search</Button>
          </Form.Item>

        </Form>
      </Search>
     
     
      <Carlist>
      {Car.map((Carr, index) => (
      <Carchart><Cardetails>
    <div> 
      <h2>{Carr.Carname}</h2>
      <h5>Model: {Carr.Model}</h5>
      <h5>Rs. {Carr.price}/hour</h5>
      <h5>Owner Name: {Carr.username}</h5>
      <h5>Onwer Phone: 03{Carr.number}</h5>
     
     <Btn >book Now</Btn>
      </div> </Cardetails>
      <Image src="https://i.ytimg.com/vi/_x3j6vFUOoA/maxresdefault.jpg" alt="Hondacivic" width='50%' height='96%'/>
      
      </Carchart>

      ))}
      </Carlist>

    </AppContainer>
  );
};

export default Services;
