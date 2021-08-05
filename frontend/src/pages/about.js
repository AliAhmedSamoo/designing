//import { styled } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar/index';

const AppContainer = styled.div`
  
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqdndIocrSTV5xYSE7eNFHshBjPiGv11XqA&usqp=CAU);
background-Size: 150%;
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
   // background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin: 5px;
    border-radius: 5px;
 
`;






const About = () => {



  return (
   <> <Navbar/>
      <AppContainer>
        <break><h1>About Us</h1></break>

      
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




          </ServicesContainer>

  
      </AppContainer>


</>

        );
}

        export default About;
