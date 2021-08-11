import React, { useState, useEffect } from 'react';
import { storage } from "../firebase";
import '../components/Carregisterform/Form.css';
import styled from "styled-components";
import { Select, Input, Upload, message, Button } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Marginer } from "../components/marginer";
import Navbar from '../components/Navbar/index';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'

const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 800px;
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
  
    // background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
    // background-Size: 20%;
    width:100%;
    height: 100%;
     min-height: 60vh;
   display: flex;
  //  flex-direction: column;
  //  align-items: center;
   justify-content: left;
    //background: rgb(50,142,65);
   // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  }

  `;

const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
 
`;

const Form = styled.div`
  
  
  
   
    width:90%;
    height: 100%;
  

  `;



const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 style={{color:`#000`}} className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='thanks.png' alt='Thank you' />
    </div>
  );
};






function Addcarform() {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null) { localStorage.setItem('email', 'null') }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formsubmitted = () => {

    setIsSubmitted(true);

  };




  const [Car, setCar] = useState({
    username: "", Carname: "", Model: "", price: "", number: ""
  })
  const Email = localStorage.getItem('email')
  const Username = localStorage.getItem('name')
  const [Img, setImg] = useState(false)
 
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState([]);



  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setCar({ ...Car, [name]: value });
  }


  const handleChangeimage = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0]);

  }







  const PostData = async (event) => {


    event.preventDefault();
    const hide = message.loading('Action in progress..', 0);
    const img = Img;
    const email = Email;
    const username = Username;
    const { Carname, Model, price, number } = Car;

    const Carimageid = uuid();
    await storage.ref(`images/${Carimageid}`).put(Img);
    const Url = await storage.ref(`images`).child(Carimageid).getDownloadURL();
     


     await console.log("imagecccc: ", Url);

   




      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": email,
        "username": username,
        "Carname": Carname,
        "Model": Model,
        "price": price,
        "number": number,
        "image": Url,
        "Carimageid": Carimageid
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/reqforCarregisteration", requestOptions)







      if (res.status == 422) {
        setTimeout(hide, 1);
        res.json().then(result => message.error(result));

      }

      else {

        setTimeout(hide, 1);
        res.json().then(result => message.success(result));
        console.log("Successful Registration");
        formsubmitted()

      }


    }



  const [email, setemail] = useState(localStorage.getItem('email'));
  const history = useHistory();
  
  
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
      <>  {email !== "null" && <> <Navbar /><div style={({  height: `80px` })}> </div>  <AppContainer>
        <div className='form-container'>
          <div className='form-content-left'>
            <img className='form-img' src='https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png' alt='Car' />
          </div>
          {!isSubmitted ? (
            <FormContainer className='form' onSubmit={PostData}  >
           <h1  style={{color:`#000`}}>
           Get started with us today! register your car by filling out the
                  information below.
              </h1>
              <Input type='text' name='username' required='true' placeholder='Enter your username' value={Username} /> <Marginer direction="vertical" margin={20} />
              <Input type='email' name='email' required='true' placeholder='Enter your email' value={Email} /> <Marginer direction="vertical" margin={20} />
              <Input type='text' name='Carname' required='true' placeholder='Enter brand of your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
              <Input type='text' name='Model' required='true' placeholder='Enter Model your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
              <Input type='text' pattern="(\d).{1,3}" title="should be a number and price should be less then Rs.10000/-" name='price' required='true' placeholder=' Rent price per hour' onChange={handleInputs} suffix="/day" prefix="Rs. " /><Marginer direction="vertical" margin={20} />
              <Input type='text' pattern="(\d).{8,8}" title="should be 11 numbers, should be like 03xxxxxxxxx" name='number' required='true' placeholder='Enter your Mobile Number' onChange={handleInputs} prefix="03" /><Marginer direction="vertical" margin={20} />


              <input type="file" required='true' name='photo' id="photo" accept="image/*" onChange={handleChangeimage} />

              <button className='form-input-btn' type="submit">Register your car</button>

            </FormContainer>

            // onSubmit={PostData}

            // <FormContainer method="POST"   >
            //   <h1>
            //     Get started with us today! Create your account by filling out the
            //     information below.
            //   </h1>

            //   <Input type='text' name='username' required='true' placeholder='Enter your username' value={username} /> <Marginer direction="vertical" margin={20} />
            //   <Input type='email' name='email' required='true' placeholder='Enter your email' value={Email} /> <Marginer direction="vertical" margin={20} />
            //   <Input type='text' name='Carname' required='true' placeholder='Enter brand of your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
            //   <Input type='text' name='Model' required='true' placeholder='Enter Model your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
            //   <Input type='number' name='price' required='true' placeholder=' Rent price per hour' onChange={handleInputs} suffix="/hour" prefix="Rs. " /><Marginer direction="vertical" margin={20} />
            //   <Input type='number' name='number' required='true' placeholder='Enter your Mobile Number' onChange={handleInputs} prefix="03" /><Marginer direction="vertical" margin={20} />
            //   <Select mode="tags" name='tag' required='true' style={{ width: '100%' }} placeholder="Tags " onChange={handleChange} /><Marginer direction="vertical" margin={20} />


            //   <input type="file" name='photo' id="photo" onChange={handleChangeimage} />



            //   {/* <Upload onChange={handleChangeimage}>
            //     <Button icon={<UploadOutlined />}>upload Image</Button>
            //   </Upload><Marginer direction="vertical" margin={20} /> */}

            //   <Button className='form-input-btn' Type="submit"  >
            //     register your Car
            //   </Button>



            // </FormContainer>






          ) : (
            <FormSuccess />
          )}
        </div>
      </AppContainer>















        <AppContainermob>
          <>

            {!isSubmitted ? (




              <FormContainer className='form' onSubmit={PostData}  >
                <h1>
                  Get started with us today! register your car by filling out the
                  information below.
                </h1>
                <Input type='text' name='username' required='true' placeholder='Enter your username' value={Username} /> <Marginer direction="vertical" margin={20} />
                <Input type='email' name='email' required='true' placeholder='Enter your email' value={Email} /> <Marginer direction="vertical" margin={20} />
                <Input type='text' name='Carname' required='true' placeholder='Enter brand of your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
                <Input type='text' name='Model' required='true' placeholder='Enter Model your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
                <Input type='text' pattern="(\d).{1,3}" title="should be a number and price should be less then Rs.10000/-" name='price' required='true' placeholder=' Rent price per hour' onChange={handleInputs} suffix="/day" prefix="Rs. " /><Marginer direction="vertical" margin={20} />
                <Input type='text' pattern="(\d).{8,8}" title="should be 11 numbers, should be like 03xxxxxxxxx" name='number' required='true' placeholder='Enter your Mobile Number' onChange={handleInputs} prefix="03" /><Marginer direction="vertical" margin={20} />


                <input type="file" accept="image/*" required='true' name='photo' id="photo" onChange={handleChangeimage} />

                <button className='form-input-btn' type="submit">Register your car</button>

              </FormContainer>





            ) : (
              <FormSuccess />
            )}

          </>
        </AppContainermob>
      </>}
        {email === "null" && <AppContainer> <div width='100px' >  Page Not fund Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
        }
      </>)
  }

  export default Addcarform
