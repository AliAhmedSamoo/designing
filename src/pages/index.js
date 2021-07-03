import React from 'react';
import styled from "styled-components";
import Whyusimgtom from "../images/whyustop.PNG";
import partnerimgtext from "../images/partnerimgtext.png";
import Carousel from "react-elastic-carousel";



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
 
`;

const WhyusContainer1 = styled.div`
  
 
    width: 100%;
    height: 300px;
    background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 5%;
 
`;


const ServicesContainer = styled.div`
  
background-image: url(https://www.citysidedrivingschool.co.uk/wp-content/uploads/2014/12/banner-1.jpg);
background-Size: 100%;
    width: 80%;
    height: 400px;
    //background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin-bottom: 5%;
    border-radius: 50px;
 
`;


const CountContainer = styled.div`
    width: 80%;
    height: 150px;
   // background: #999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;  
    display: grid;
    grid-template-columns: auto auto auto auto;
   grid-gap: 120px;
`;

const SubCountContainer = styled.div`
    width: 150%;
    height: 130px;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
   
    margin-top: 0.5%;
    // margin-left: 10%;
    border-radius: 50px;
`;

const PopcarandlocContainer = styled.div`
  
 
width: 90%;
height: 450px;
background: #999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: bottom;
margin-bottom: 5%;
`;

const Popcarandlocheader = styled.div`
  
 
width: 100%;
height: 50px;
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
/* Second Nav */
margin-left: 0px;
background: #333;
height: 100%;
width: 20%;

&:hover {
  transition: all ;
  background: #fff;
  color: #010606;
}
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

const breakPoints = [
  
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 950, itemsToShow: 5 },
];






const Home = () => {
  return (
    <div>
      <AppContainer >

        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>home</h1>







        <WhyusContainer >
          <Imgwhyustop src={Whyusimgtom} width='80%' height='60px' alt="top" />

          <WhyusContainer1 >


          </WhyusContainer1>







        </WhyusContainer>







        <ServicesContainer>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>ServicesContainer</h1>

        </ServicesContainer>






        <CountContainer>
        <SubCountContainer>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>countContainer</h1>
          </SubCountContainer>

          <SubCountContainer>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>countContainer</h1>
          </SubCountContainer>

          <SubCountContainer>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100%' }}>countContainer</h1>
          </SubCountContainer>
        </CountContainer>









        <PopcarandlocContainer>
          <Popcarandlocheader>
         <Popcarandlocheaderbtn> Popular Car</Popcarandlocheaderbtn>
         <Popcarandlocheaderbtn> Our Office</Popcarandlocheaderbtn>
          </Popcarandlocheader>
        </PopcarandlocContainer>

        <PartnersContainer>
          <img src={partnerimgtext} alt="partnerimgtext" width="250`px" height="30%" />
        
        
          <Carousel breakPoints={breakPoints} justify-content='center' align-items= 'center'>
          <Item>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"  width="100%" height="100%" alt="bmw" />   </Item>
          <Item>  <img src="https://lh3.googleusercontent.com/proxy/YsSC_HNvZTcDb6oqQC0411eauC1CyMYxrTXwLxcWFuIZDdnqJ1Nw-JrsB2jL5j8CDpC90GDuEdE9xHOxd2-BNeHbdeh8MHRzaehG-lCr2vdOQpjR_MIB5l7BPchAc1nerr6qw3IrNw6sIQ"  width="100%" height="100%" alt="toyota" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b585b2edbce24c47b2c54.png"  width="100%" height="100%" alt="ferrari" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b585b2edbce24c47b2cc5.png"  width="100%" height="100%" alt="suzuki" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b585b2edbce24c47b2c73.png"  width="100%" height="100%" alt="Honda" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c46b.png"  width="100%" height="100%" alt="Audi" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c482.png"  width="100%" height="100%" alt="Hyundai" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c487.png"  width="100%" height="100%" alt="Jaguar" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c48a.png"  width="100%" height="100%" alt="Land Rover" /> </Item>
          <Item> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c497.png"  width="100%" height="100%" alt="Nissan" /> </Item>
        </Carousel>
        
        
        
        </PartnersContainer>

      </AppContainer>
    </div>
  );
};

export default Home;
