import React, { useState, useEffect } from 'react';
import '../components/Carregisterform/Form.css';
import styled from "styled-components";
import validate from '../components/Carregisterform/validateInfo';
import { Select, Input, Upload, message, Button } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';

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
     height: 1000px;
   display: flex;
   // flex-direction: column;
   // align-items: center;
   justify-content: center;
    //background: rgb(50,142,65);
   // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  }

  `;


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    Carname: '',
    Model: '',
    price: '',
    Image: '',
    number: ''


  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
  //  [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

function Tagchange(value) {
  console.log(`selected ${value}`);
}
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <Input

            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <Input

            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <Input

            type='text'
            name='Carname'
            placeholder='Enter brand of your Car'
            value={values.Carname}
            onChange={handleChange}
          />
          {errors.Carname && <p>{errors.Carname}</p>}
        </div>

        <div className='form-inputs'>
          <Input

            type='text'
            name='Model'
            placeholder='Enter Model your Car'
            value={values.Model}
            onChange={handleChange}
          />
          {errors.Model && <p>{errors.Model}</p>}
        </div>

        <div className='form-inputs'>
          <Input

            type='number'
            name='price'
            placeholder='Rent price per hour'
            value={values.price}
            onChange={handleChange}
            suffix="/hour"
            prefix="Rs. " />
          {errors.price && <p>{errors.price}</p>}
        </div>

        <div className='form-inputs'>
          <Input

            type='number'
            name='number'
            placeholder='Enter your Mobile Number'
            value={values.number}
            onChange={handleChange}
            prefix="03" />
          {errors.number && <p>{errors.number}</p>}
        </div>

        <div className='form-inputs'>
          <Select
            mode="tags" style={{ width: '100%' }} placeholder="Tags " onChange={Tagchange}
          >
            {children}</Select>
        </div>

        <div className='form-inputs'>
          <Upload {...Imageinfo}>
            <Button icon={<UploadOutlined />}>upload Image</Button>
          </Upload>
        </div>


        <button className='form-input-btn' type='submit'>
          register your Car :)
        </button>
      </form>
    </div>
  );
};


const Imageinfo = {
  name: 'file',
  action: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='http://assets.stickpng.com/thumbs/580b585b2edbce24c47b24c5.png' alt='Thank you' />
    </div>
  );
};



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png' alt='Car' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};




const Formmob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};










function addcarform() {
  return (
  <>  <AppContainer>
      <Form />
    </AppContainer>
    <AppContainermob>
    <Formmob/>
    </AppContainermob>
  </>)
}

export default addcarform
