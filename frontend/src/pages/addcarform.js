import React, { useState, useEffect } from 'react';
import { storage } from "../firebase";
import '../components/Carregisterform/Form.css';
import styled from "styled-components";
import { Select, Input, Upload, message, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Marginer } from "../components/marginer";
import Navbar from '../components/Navbar/index';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'

import { Btn } from "../components/Button"

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


const AppContainer1 = styled.div`
  
 //background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 87vh;
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  

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


const CarrequestsContainer = styled.div`
  
   // background: #000;
   width: 80%;
   height: auto;
   max-height: 500px;
   overflow-y: scroll;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
   align-items: center;
   justify-content: center;
   margin: 30px;
   border-radius: 5px;
   box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
   @media screen and (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
   align-items: center;
   justify-content: center;
      
`;

const Form = styled.div`
  
  
  
   
    width:90%;
    height: 100%;
  

  `;



const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 style={{ color: `#000` }} className='form-success'>We have received your request!</h1>
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




  const [Carsinlist, setCarsinlist] = useState([])
  const [Carsreq, setCarsreq] = useState([])

  const [Statusview, setStatusview] = useState("f")
  const [Mainscreen, setMainscreen] = useState("f")
  const [Registerationform, setRegisterationform] = useState("t")

  const [Activebtn, setActivebtn] = useState("true");
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

  const reqtoreg = async () => {

    setStatusview("f")

    setMainscreen("t")
    setRegisterationform("f")

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



    await fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromreqCarlistformstatus", requestOptions)
      .then(response => response.json())
      .then(result => setCarsreq(result))
      .catch(error => console.log('error', error));

  }





  const PostData = async (event) => {

    await setActivebtn("false")
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







    if (res.status === 422) {
      setTimeout(hide, 1);
      res.json().then(result => message.error(result));
      await setActivebtn("true")

      setTimeout(reqtoreg, 5000);


    }

    else {
      setTimeout(reqtoreg, 5000);
      setTimeout(hide, 1);
      res.json().then(result => message.success(result));
      console.log("Successful Registration");
      formsubmitted()
      await setActivebtn("true")
    }


  }



  const [email, setemail] = useState(localStorage.getItem('email'));
  const history = useHistory();


  useEffect(async () => {
    if (localStorage.getItem('email') !== "null") {

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


        localStorage.setItem('email', 'null')
        message.info("your account has been deleted by admin")
        await history.push("/");
      }

    }
  }, [])







  useEffect(async () => {






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



    await fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromreqCarlistformstatus", requestOptions)
      .then(response => response.json())
      .then(result => setCarsreq(result))
      .catch(error => console.log('error', error));



    await fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromCarlistforstatu", requestOptions)
      .then(response => response.json())
      .then(result => setCarsinlist(result))
      .catch(error => console.log('error', error));
    // Carsreq.length === 0

    // setTimeout(cheking, 5000);

  }, [])

  // const cheking =  () => {

  //   if (Carsinlist.length !== 0) {
  //     setStatusview("f")
  //     console.log("sdszsd")
  //     setMainscreen("f")
  //     setRegisterationform("t")


  //   } else if (Carsreq.length !== 0) {

  //       setStatusview("f")

  //       setMainscreen("f")
  //       setRegisterationform("t")
  //     }




  //  }
  // if (Carsinlist.length !== 0) {
  //   setStatusview("f")
  //   console.log("sdszsd")
  //   setMainscreen("f")
  //   setRegisterationform("t")


  // } else if (Carsreq.length !== 0) {

  //     setStatusview("f")

  //     setMainscreen("f")
  //     setRegisterationform("t")
  //   }






  const [Btnactive, setBtnactive] = useState("true");


  return (
    <>  {email !== "null" && <> <Navbar /><div style={({ height: `80px` })}> </div>



      {Registerationform === "t" && <>



        <AppContainer>
          <div className='form-container'>
            <div className='form-content-left'>
              <img className='form-img' src='https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png' alt='Car' />
            </div>
            {!isSubmitted ? (
              <FormContainer className='form' onSubmit={PostData}  >
                <h1 style={{ color: `#000` }}>
                  Get started with us today! register your car by filling out the
                  information below.
                </h1>
                <Input type='text' name='username' required='true' placeholder='Enter your username' value={Username} /> <Marginer direction="vertical" margin={20} />
                <Input type='email' name='email' required='true' placeholder='Enter your email' value={Email} /> <Marginer direction="vertical" margin={20} />
                <Input type='text' name='Carname' required='true' placeholder='Enter brand of your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
                <Input type='text' name='Model' required='true' placeholder='Enter Model your Car' onChange={handleInputs} /><Marginer direction="vertical" margin={20} />
                <Input type='text' pattern="(\d).{1,3}" title="should be a number and price should be less then Rs.10000/-" name='price' required='true' placeholder=' Rent price per day' onChange={handleInputs} suffix="/day" prefix="Rs. " /><Marginer direction="vertical" margin={20} />
                <Input type='text' pattern="(\d).{8,8}" title="should be 11 numbers, should be like 03xxxxxxxxx" name='number' required='true' placeholder='Enter your Mobile Number' onChange={handleInputs} prefix="03" /><Marginer direction="vertical" margin={20} />


                <input type="file" required='true' name='photo' id="photo" accept="image/*" onChange={handleChangeimage} />

                {Activebtn === "true" && <>    <Btn type="submit" >Register your car</Btn></>}
                {Activebtn === "false" && <>    <Btn type="button" onClick={() => { message.info("please wait ") }} >Register your car</Btn></>}



                {Carsinlist.length !== 0 && <>
                  <div style={{ color: `orange`, bottom: `10px`, right: `50px`, display: `flex`, position: `absolute` }}>

                    <a onClick={() => { setMainscreen("f"); setStatusview("t"); setRegisterationform("f"); }}>Your Cars</a></div>

                </>}

                {Carsinlist.length === 0 && <>

                  {Carsreq.length !== 0 && <>

                    <div style={{ color: `orange`, bottom: `10px`, right: `50px`, display: `flex`, position: `absolute` }}>

                      <a onClick={() => { setMainscreen("f"); setStatusview("t"); setRegisterationform("f"); }}>Your Cars</a></div>

                  </>}

                </>}


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
                <Input type='text' pattern="(\d).{1,3}" title="should be a number and price should be less then Rs.10000/-" name='price' required='true' placeholder=' Rent price per day' onChange={handleInputs} suffix="/day" prefix="Rs. " /><Marginer direction="vertical" margin={20} />
                <Input type='text' pattern="(\d).{8,8}" title="should be 11 numbers, should be like 03xxxxxxxxx" name='number' required='true' placeholder='Enter your Mobile Number' onChange={handleInputs} prefix="03" /><Marginer direction="vertical" margin={20} />


                <input type="file" accept="image/*" required='true' name='photo' id="photo" onChange={handleChangeimage} />

                {Activebtn === "true" && <>    <Btn type="submit" >Register your car</Btn></>}
                {Activebtn === "false" && <>    <Btn type="button" onClick={() => { message.info("please wait ") }} >Register your car</Btn></>}

            
                {Carsinlist.length !== 0 && <>
                  <div style={{ width:`100%`, height:`50px`,display:` flex`, justifyContent:`flex-end`,alignItems:`flex-end`}}>

                    <a onClick={() => { setMainscreen("f"); setStatusview("t"); setRegisterationform("f"); }}>Your Cars</a></div>

                </>}

                {Carsinlist.length === 0 && <>

                  {Carsreq.length !== 0 && <>

                    <div style={{width:`100%`, height:`50px`,display:` flex`, justifyContent:`flex-end`,alignItems:`flex-end`}}>

                    <div> <a onClick={() => { setMainscreen("f"); setStatusview("t"); setRegisterationform("f"); }}>Your Cars</a> </div></div>

                  </>}

                </>}
            
            
            
            
            
              </FormContainer>





            ) : (
              <FormSuccess />
            )}

          </>
        </AppContainermob>


      </>}


      {Mainscreen === "t" && <>




        <AppContainer1>
          <div style={{ width: `80%`, justifyContent: `center`, display: `flex` }}>

            <Btn style={{ width: `30%` }} onClick={() => { setMainscreen("f"); setStatusview("t"); setRegisterationform("f"); }}> Your cars </Btn>
            <Btn style={{ width: `30%` }} onClick={() => { setMainscreen("f"); setStatusview("f"); setRegisterationform("t"); setIsSubmitted(true);}}> Register your caSr </Btn>


          </div>

        </AppContainer1>






      </>}





      {Statusview === "t" && <>

        <AppContainer1>



          <CarrequestsContainer>


            {Carsreq.map((Carr, index) => (
              <Carchart><Cardetails>
                <div>
                  <h2>{Carr.Carname}</h2>
                  <h5>Model: {Carr.Model}</h5>
                  <h5>Rs. {Carr.price}/day</h5>
                  <h5>Owner Name: {Carr.username}</h5>
                  <h5>Onwer Phone: 03{Carr.number}</h5>



                  <img width="40%" src='pending.png' />



                </div> </Cardetails>







                <Image src={Carr.image} alt="Hondacivic" width='50%' height='96%' />


              </Carchart>

            ))}



            {Carsinlist.map((Carr, index) => (
              <Carchart><Cardetails>
                <div>
                  <h2>{Carr.Carname}</h2>
                  <h5>Model: {Carr.Model}</h5>
                  <h5>Rs. {Carr.price}/day</h5>
                  <h5>Owner Name: {Carr.username}</h5>
                  <h5>Onwer Phone: 03{Carr.number}</h5>




                  {Btnactive === "true" && <>     <Button danger value="Delete"
                    onClick={async () => {

                      var h = new Headers();
                      h.append("Content-Type", "application/json");

                      var r = JSON.stringify({
                        "_id": Carr._id,

                      });

                      var rq = {
                        method: 'POST',
                        headers: h,
                        body: r,
                        redirect: 'follow'
                      };

                      await fetch("https://rent-a-car-pakistan.herokuapp.com/deletecarcardattaaa", rq)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));






                      message.info("Car removed");
                      console.log("Car removed");








                      var a = new Headers();
                      a.append("Content-Type", "application/json");

                      var b = JSON.stringify({
                        "email": email
                      });

                      var c = {
                        method: 'POST',
                        headers: a,
                        body: b,
                        redirect: 'follow'
                      };
                      await fetch("https://rent-a-car-pakistan.herokuapp.com/getdatafromCarlistforstatu", c)
                        .then(response => response.json())
                        .then(result => setCarsinlist(result))
                        .catch(error => console.log('error', error));




                    }} >   Remove car    </Button> </>}





                </div> </Cardetails>







                <Image src={Carr.image} alt="Hondacivic" width='50%' height='96%' />


              </Carchart>

            ))}



          </CarrequestsContainer>

















        </AppContainer1>

      </>}












    </>}
      {email === "null" && <AppContainer> <div width='100px' >  Page Not found Please Sign in to continue <Link to="/signin"> Sign in here</Link> </div>  </AppContainer>
      }
    </>)
}

export default Addcarform
