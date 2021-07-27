import React, { useState } from "react";
import styled from "styled-components";
import Whyusimgtom from "../images/whyustop.PNG";
import partnerimgtext from "../images/partnerimgtext.png";
import Carousel from "react-elastic-carousel";
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
import Happyclient from '@material-ui/icons/SentimentVerySatisfied';
import Carinstock from '@material-ui/icons/LocalTaxi';
import Offices from '@material-ui/icons/EmojiTransportation';
import { Btn } from '../components/Button'
import { Link } from 'react-router-dom';
import {PopularCars} from '../components/Carbox'


import Bmw from "../images/partners/BMW.png"
import Toyota from "../images/partners/toyota.png"
import Ferrari from "../images/partners/ferrari.png"
import Suzuki from "../images/partners/suzuki.png"
import Honda from "../images/partners/honda.png"
import Audi from "../images/partners/audi.png"
import Hyundai from "../images/partners/hyundai.png"
import Jaguar from "../images/partners/jaguar.png"
import LandRover from "../images/partners/landrover.png"
import Nissan from "../images/partners/nissan.png"


function Map() {


  return (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 24.8673535, lng: 67.0849856 }} >

      <Marker
        key='folio3'
        position={{
          lat: 24.867343,
          lng: 67.0847641
        }} />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));


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

const WhyusContainer = styled.div`
  
//background: #000;
    width: 80%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5%;
    @media screen and (max-width: 768px) {
      display: none;
       }
 
`;

const WhyusContainer1 = styled.div`
  
 
    width: 100%;
    height: 500vh;
    //background: #999;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    @media screen and (max-width: 768px) {
      display: none;
       }
 
`;


const ServicesContainer = styled.div`
  
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsOxMUakO5yCwqYUNm56aRHKdPEKNESroRw&usqp=CAU);
background-Size: 100%;
    width: 80%;
    height: 300px;
    //background: #999;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: bottom;
    margin-bottom: 5%;
    
    border-radius: 50px;
    color : #fff;

    @media screen and (max-width: 768px) {
      background-Size: 1100%;
      border-radius: 5px;
      margin-top: 5%;
       }
 
`;

const SubServicesContainer = styled.p`
    width: 50%;
    height: 200px;
    //background: #999;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    margin: 5%;  
  //   display: grid;
  //   grid-template-columns: auto auto auto auto;
  //  grid-gap: 120px;
  @media screen and (max-width: 768px) {
    font-size:10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
  }
`;


const CountContainer = styled.div`
    width: 100%;
    height: 100%;
   // background: #999;
   display: grid;
   grid-template-columns: auto auto auto auto;
   grid-gap: 10%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;  
    
  
`; 

// grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

const SubCountContainer = styled.p`
    width: 150%;
    height: 130px;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    font-size:60%;
    margin-top: 0.5%;
    border-radius: 50px;

    
`;

const PopcarandlocContainer = styled.div`
  
 
width: 90%;
height: 100%;
//background: #999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: bottom;
margin-bottom: 5%;
`;

const Popcarandlocheader = styled.div`
  
 
width: 100%;
height: 40px;
//background: #555;
grid-template-columns: auto auto auto auto;
flex-direction: column;
align-items: left;
justify-content: bottom;
//margin-bottom: 5%;
`;

const Popcarandlocheaderbtn = styled.button`
border-radius: 20px 20px 0px 00px;
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltOnWb8DwIGlyUE-k6WksPWBBWvcB0p-fNg&usqp=CAU);
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
border-color: #000;
margin-left: 0px;
background: #333;
height: 20%
width: 100%;

&:active {
  transition: all ;
  background: #fff;
  color: #010606;
}
`;

const PuplarCarContainer = styled.div`
  
 
width: 100%;
height: 100%;
background: #999;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);

 @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: top;
    justify-content: center;
      
    
    }

    `;

const LoationContainer = styled.div`
  
 
width: 100%;
height: 400px;
//background: #235;
display: flex;
flex-direction: column;
align-items: center;
justify-content: bottom;

`;




const PartnersContainer = styled.div`
  
 
    width: 90%;
    height: 300px;
   // background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin-bottom: 5%;
    
`;


const Imgwhyustop = styled.img`
  
 
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5%;
    margin-top: 3%;
    border-radius: 20px;
    
 
`;


const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 90%;
  //background-color: #00008B;
  //color: #fff;
  margin: 1px;
  
`;

const Itemcar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008B;
  //color: #fff;
  margin: 1px;
  
`;

const breakPoints = [

  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 950, itemsToShow: 5 },
];





const Home = () => {


  const [active, setActive] = useState("pularCars");



  const switchTolocation = () => {

    setTimeout(() => {
      setActive("location");
    }, 200);
  };

  const switchTopularCars = () => {

    setTimeout(() => {
      setActive("pularCars");
    }, 200);
  };

  let TotalUsers = 5576;
  let Totalcar = 651;
  let Totaloffices = 3;


  return (
    <div>
      <AppContainer >

        {/* <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>Why US</h1> */}







        <WhyusContainer >
          <Imgwhyustop src={Whyusimgtom} width='80%' height='100px' alt="top" />

          <WhyusContainer1 >
          <Carousel justify-content='center' align-items='center'>
            <Itemcar> <img src="https://www.classiccar.com.pk/wp-content/uploads/2020/09/classic_car_banner-2.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
            <Itemcar>  <img src="https://www.honda.com.pk/wp-content/uploads/2020/11/Online-order-webbanner.webp" width="100%" height="100%" alt="bmw" /> </Itemcar>
            <Itemcar> <img src="https://d12ou7vikjr9w.cloudfront.net/wp-content/uploads/2019/11/21125343/Honda-2019CivicSedan.jpg" width="100%" height="100%" alt="bmw" /> </Itemcar>
          </Carousel>


          </WhyusContainer1>







        </WhyusContainer>




        <ServicesContainer>
          <SubServicesContainer>
            <p>Rent A Car services are available at your fingertips online, for a more modern and convenient customer experience. Rently provides both on-demand and pre-scheduled vehicles for any situation, occasion or event</p>
            
            
            <div>
             <Link to='/addcar' > <Btn>Add your Car</Btn> </Link> <></> <></> <></><></><></>
             <Link to='/services'> <Btn>Book a Car</Btn></Link>


            </div>

          </SubServicesContainer>



        </ServicesContainer>
        <CountContainer>
          <SubCountContainer>
          <Happyclient />  <h2>  {TotalUsers + " +"}</h2> <h1> Happy clients</h1>
          </SubCountContainer>

          <SubCountContainer>
           <Carinstock /> <h2>   {Totalcar + "+"}</h2><h1> Cars in stock</h1>
          </SubCountContainer>

          <SubCountContainer>
         <Offices /> <h2>   {Totaloffices + "+"}</h2> <h1>  Our offices</h1>
          </SubCountContainer>
        </CountContainer>
        <PopcarandlocContainer>
          <Popcarandlocheader>
            <Popcarandlocheaderbtn to='/' onClick={switchTopularCars} activeStyle> Popular Car</Popcarandlocheaderbtn>
            <Popcarandlocheaderbtn to='#loc' onClick={switchTolocation} activeStyle > Our Office</Popcarandlocheaderbtn>
          </Popcarandlocheader>
          {active === "pularCars" && <PuplarCarContainer > <PopularCars></PopularCars> </PuplarCarContainer  >}
          {active === "location" && <LoationContainer>
            <div style={{ width: '100%', height: '100%' }}> <MapWrapped
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyAwlpR_lmT3Cj4VW43ifDRpbQ17YqG4hO4`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
          </LoationContainer>}
        </PopcarandlocContainer>
        <PartnersContainer>
          <img src={partnerimgtext} alt="partnerimgtext" width="250`px" height="30%" />
          <Carousel breakPoints={breakPoints} justify-content='center' align-items='center'>
            <Item>  <img src={Bmw} width="100%" height="100%" alt="bmw" />   </Item>
            <Item>  <img src={Toyota} width="100%" height="100%" alt="toyota" /> </Item>
            <Item> <img src={Ferrari} width="100%" height="100%" alt="ferrari" /> </Item>
            <Item> <img src={Suzuki} width="100%" height="100%" alt="suzuki" /> </Item>
            <Item> <img src={Honda} width="100%" height="100%" alt="Honda" /> </Item>
            <Item> <img src={Audi} width="100%" height="100%" alt="Audi" /> </Item>
            <Item> <img src={Hyundai} width="100%" height="100%" alt="Hyundai" /> </Item>
            <Item> <img src={Jaguar} width="100%" height="100%" alt="Jaguar" /> </Item>
            <Item> <img src={LandRover} width="100%" height="100%" alt="Land Rover" /> </Item>
            <Item> <img src={Nissan} width="100%" height="100%" alt="Nissan" /> </Item>
          </Carousel>
        </PartnersContainer>

      </AppContainer>
    </div>
  );
};

export default Home;