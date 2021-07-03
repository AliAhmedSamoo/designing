//import { styled } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
  
  background-image: url(https://wallpaperaccess.com/full/4743010.jpg);
   background-Size: 100%;
  //  width: 2200px;
    height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;
const TextContainer = styled.div`
  
 // background-image: url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80);
   background-Size: 100%;
    image
   width: 100%;
    height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;
const ServicesContainer = styled.div`
  
//background-image: url(https://www.citysidedrivingschool.co.uk/wp-content/uploads/2014/12/banner-1.jpg);

background-Size: 100%;
    width: 80%;
    height: 700px;
    background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin: 5%;
    border-radius: 5px;
 
`;
const ImageContainer = styled.div`

    width: 500%;
    height: 200px;
    background: red;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: bottom;
    `;
    


const About = () => {
 
 
 
  return (
    <div
      //  style={{
      //   display: 'flex',
        //  justifyContent: 'center',
        //  alignItems: 'center',
        // height: '90vh'
      //  }}
    >
<AppContainer>
     <break><h1>About Us</h1></break>     
     
      <break>
      <ServicesContainer>
      <TextContainer> <p>
      Rently's car-rental services are available at your fingertips online, for a more modern and convenient customer experience.
Rently provides both on-demand and pre-scheduled vehicles for any situation, occasion or event, such as:
<list>
<li>Corporate Office Staff</li>
<li>Tours and Trips</li>
<li>Weddings</li>
<li>Families / Individuals</li>
</list>
One of the biggest strengths of Rently is its versatility. Our wide-range of latest models and well-maintained cars, is suited for everyone and all occasions.
At Rently, each car and driver must undergo ‘Rently Selection Tests' before becoming operational. Quality, being the cornerstone of Rently services, is ensured in every mile.

      </p>
      </TextContainer>
      <div> <ImageContainer>

        <img src=" url= 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg'" alt="ab" />
        </ImageContainer>
    

        </div>

      </ServicesContainer>

      </break>
      </AppContainer>

      
    </div>
     
  );
};

export default About;
