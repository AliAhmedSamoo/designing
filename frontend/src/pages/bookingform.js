import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Select,
  TreeSelect,
  Switch,
  DatePicker,
  Checkbox,
  message,
} from 'antd';
import Navbar from '../components/Navbar/index';

const { RangePicker } = DatePicker;

const AppContainer = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
  // background-Size: 20%;
   width:100%;
    height: 100vh;
  display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const Tag = styled.div`
  
   background-Size: 20%;
    width: 80%;
    box-shadow: 5px 0px 2px 10px;
    height: auto;
  display: flex;
  // margin-left : 50%;
   flex-direction: column;
   align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-left : 10%;
    align-items: none;
    width: 70%;
   }

   @media screen and (max-width: 450px) {
    margin-left : 0%;
    width: 70%;
   }
`;


const Tag2 = styled.div`
background: #000;
  width: 100%;
  @media screen and (max-width: 768px) {
   display: none;
   }

  

  `;









function Bookingform() {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null ){ localStorage.setItem('email','null')   }
  const Carid = localStorage.getItem('Carr._id');
  const Carname = localStorage.getItem('Carr.Carname');
  const CarModel = localStorage.getItem('Carr.Model');
  const Carusername = localStorage.getItem('Carr.username');
  const Carnumber = localStorage.getItem(' Carr.number');
  const Carimage = localStorage.getItem('Carr.image');
  const Carpricee = localStorage.getItem('Carrpricee');
  const [email, setemail] = useState(localStorage.getItem('email'));
  const [Activebtn, setActivebtn] = useState("true");
  
  const CarOnweremail = localStorage.getItem('Car Onwer email');

  const [Bookinginfo, setBookinginfo] = useState({
    Name: "", Phone: "", CNIC: "", Address: "", SelectedCity: "null", Date: "null",
  })

  const [Requeststatus, setRequeststatus] = useState("notSubmitted")


  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setBookinginfo({ ...Bookinginfo, [name]: value });
  }

  let SelectedCity;
  function handleChange(value) {
    console.log(`selected ${value}`);
    SelectedCity = value
    console.log(SelectedCity);
    setBookinginfo({ ...Bookinginfo, SelectedCity: value });
  }




  console.log("Car id is ", Carid);
  console.log("Car Onwer email is ", CarOnweremail);

  const onFinish = async () => {

   await  setActivebtn("false")
if (Bookinginfo.SelectedCity === "null") {
  
  message.error("Please select your city")

}
  else {

    

    if (Bookinginfo.Date != "null" ) {
      
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "Name": Bookinginfo.Name,
        "Phone": Bookinginfo.Phone,
        "CNIC": Bookinginfo.CNIC,
        "Address": Bookinginfo.Address,
        "SelectedCity": Bookinginfo.SelectedCity,
        "Date": Bookinginfo.Date,
        "Carid": Carid,
        "CarOnweremail": CarOnweremail,
        "Carname": Carname,
        "CarModel": CarModel,
        "Carusername": Carusername,
        "Carnumber": Carnumber,
        "Carimage": Carimage,
        "Carprice": Carpricee,
        "email" : localStorage.getItem('email')
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
     await  fetch("https://rent-a-car-pakistan.herokuapp.com/getbookingformdata", requestOptions)
        .then(response => response.text(), setRequeststatus("submitted"))
        .then(result => console.log(result))
  
  
      localStorage.removeItem('Carr.price');
      localStorage.removeItem('Carr._id');
      localStorage.removeItem('Carr.Carname');
      localStorage.removeItem('Carr.Model');
      localStorage.removeItem('Carr.username');
      localStorage.removeItem(' Carr.number');
      localStorage.removeItem('Carr.image');
      localStorage.removeItem('Car Onwer email');
      localStorage.removeItem('Carrpricee');
      await  setActivebtn("true")
  }else {
    await  setActivebtn("true")
    message.error("Please select Date")
  }
  }
  };


  return (
    <>  {email !== "null" &&

      <>   <Navbar /><div style={({  height: `80px` })}> </div>

        <AppContainer>
          {Requeststatus === "notSubmitted" &&
            <div>
        <div style={{display:`flex`}}>     
   <Tag2>  <img src={Carimage} width="100%" height="100%" alt="banner2" />  </Tag2>
              
              
              <Tag>



                <h2>Booking Form</h2>

                <Form onFinish={onFinish}>



                  <Form.Item >
                    <Input type='text' required='true' name='Name' onChange={handleInputs} placeholder="Name" />
                  </Form.Item>
                  <Form.Item >
                    <Input prefix="03" name="Phone" required="true" type='text' pattern="(\d).{8,8}"  title="should be 11 numbers, should be like 03xxxxxxxxx"  onChange={handleInputs} placeholder="Phone" />
                  </Form.Item>
                  <Form.Item >
                    <Input required="true" name="CNIC" type='text' pattern="(\d).{12,12}" title="should be 13 numbers, should be like 4250112345678" onChange={handleInputs} placeholder="CNIC" />
                  </Form.Item>
                  <Form.Item >
                    <Input type='text' required='true' name='Address' onChange={handleInputs} placeholder="Address" />
                  </Form.Item>
                  <Form.Item >
                    <Select type='text' required='true'  name='SelectedCity' onChange={handleChange} placeholder="Select City">
                      <Select.Option value="Karachi">Karachi</Select.Option>
                      <Select.Option value="Lahore">Lahore</Select.Option>
                      <Select.Option value="Islamabad">Islamabad</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item >
                    <RangePicker onChange={(value, dateString) => {

                      console.log('Formatted Selected Time: ', dateString)

                      setBookinginfo({ ...Bookinginfo, Date: dateString });
                    }} />
                  </Form.Item>
                  {/* </Form.Item>
        <Form.Item label="Car Tag">
          <InputNumber />
        </Form.Item> */}
                  <Form.Item>
                    <Checkbox required='true' >I agree to all the terms & conditions</Checkbox>

                  </Form.Item>
                  <Form.Item >
       {Activebtn === "true" && <>            <Button htmlType="submit" >Confirm Booking</Button></>} 
       {Activebtn === "false" && <>           <Button htmlType="button" onClick={()=>{message.info("please wait")}} >Confirm Booking</Button></>} 
                  </Form.Item>
                </Form>
              </Tag>
            
              </div> 
            
             </div>
          }

          {Requeststatus === "submitted" &&
            <Tag> <div><h1>your booking Request has been send to the Owner of Car,  the Owner of Car will contact you as he/she accept your request. </h1></div></Tag>
          }
        </AppContainer>


      </>

    }
{email === "null" && <AppContainer> <div width= '100px' >  Page Not found Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
}
    </>
  )

}

export default Bookingform
