import React, { useState, useEffect } from 'react';
import '../components/Carregisterform/Form.css';
import styled from "styled-components";
import { Select, Input, Upload, message, Button} from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Marginer } from "../components/marginer";

const AppContainer = styled.div`
  
 background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 1000px;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  @media screen and (max-width: 768px) {
    display: none;
  
  }

  `;


  const AppContainermob = styled.div`
  
  display: none;
  @media screen and (max-width: 768px) {
  
    background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
    background-Size: 20%;
    width:100%;
    height: 100%;
     min-height: 100vh;
   display: flex;
  //  flex-direction: column;
  //  align-items: center;
   justify-content: left;
    //background: rgb(50,142,65);
   // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  }

  `;

  const Form = styled.div`
  
  
  
   
    width:90%;
    height: 100%;
  

  `;

 
  


const UseForm = (callback, validate) => {

  const [Car, setCar] = useState({
    username: "", email: "", Carname: "", Model: "" , Model: "", price: "", number: "", tag: []
  })

  let name, value;
    const handleInputs =(e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setCar({...Car , [name]:value});
    }

  return (
    
      <Form  className='form'  >
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
       
          <Input type='text' name='username' placeholder='Enter your username'  onChange={handleInputs}/> <Marginer direction="vertical" margin={20} />
          <Input type='email' name='email' placeholder='Enter your email'  onChange={handleInputs}/> <Marginer direction="vertical" margin={20} />
          <Input type='text' name='Carname' placeholder='Enter brand of your Car'  onChange={handleInputs}/><Marginer direction="vertical" margin={20} />
          <Input type='text' name='Model' placeholder='Enter Model your Car'  onChange={handleInputs}/><Marginer direction="vertical" margin={20} />
          <Input type='number' name='price' placeholder=' Rent price per hour'  onChange={handleInputs}  suffix="/hour" prefix="Rs. "/><Marginer direction="vertical" margin={20} />
          <Input type='number' name='number' placeholder='Enter your Mobile Number'  onChange={handleInputs} prefix="03"/><Marginer direction="vertical" margin={20} />
          <Select mode="tags" style={{ width: '100%' }} placeholder="Tags "  onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
          <Upload >
            <Button icon={<UploadOutlined />}>upload Image</Button>
          </Upload><Marginer direction="vertical" margin={20} />

          <button className='form-input-btn' type='submit'>
          register your Car 
        </button>



      </Form>
  
  );
};



const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='http://assets.stickpng.com/thumbs/580b585b2edbce24c47b24c5.png' alt='Thank you' />
    </div>
  );
};



const Formm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png' alt='Car' />
        </div>
        {!isSubmitted ? (
          <UseForm  />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};




const Formmob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  return (
    <>

        {!isSubmitted ? (
          <UseForm  />
        ) : (
          <FormSuccess />
        )}

    </>
  );
};










function addcarform() {
  return (
  <>  <AppContainer>
      <Formm />
    </AppContainer>
    <AppContainermob>
    <Formmob/>
    </AppContainermob>
  </>)
}

export default addcarform
