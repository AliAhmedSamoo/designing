import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';



const AppContainer = styled.div`
  
  background-image: url(https://i.pinimg.com/originals/cb/ac/d9/cbacd9b2f590524a563c66fd77cf54c7.jpg);
   background-Size: 100%;
   width: 100%;
   height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
  @media screen and (max-width: 768px) {
    background-Size: 200%;
  }
  `;

  const LLink = styled(Link)`
 
  color: #073763;
  &:hover { 
  box-shadow: 0px 0px 10px 15px;
  color: #073763;
  }
   
  
  `;


  const Content = styled.div`
 
  @media screen and (max-width: 480px) {
   display: none;
  }
  
  `;

  const Content2 = styled.div`
 display: none;
  @media screen and (max-width: 480px) {
   display: grid;
  }
  
  `;

export default function Mainpage() {
    const emaillll = localStorage.getItem('email')
    if (emaillll === null) { localStorage.setItem('email', 'null') }



    return (<AppContainer>

     <Content>   <div>
            <img src="logo1111.png" width="400px" height="300px"  ></img>
        </div>
        
        <div style={({ width: `400px`, height: `40px` })}> </div>
        
        
        <div style={({ width: `400px`, height: `40px` })}>
          
        <div style={({ width: `100%`, height: `100%`, justifyContent:`center`, alignItems:`center`, display:`flex` })}>
          
         <div>   <LLink to="/home"> <img src="getstared.png" alt="getstarted" width="100%" height="40px" /> </LLink> </div>
      
            </div>
       
       
        </div>
   
        </Content>


        <Content2>   <div>
            <img src="logo1111.png" width="200px" height="150px"  ></img>
        </div>
        
        <div style={({ width: `200px`, height: `40px` })}> </div>
        
        
        <div style={({ width: `200px`, height: `40px` })}>
          
        <div style={({ width: `100%`, height: `100%`, justifyContent:`center`, alignItems:`center`, display:`flex` })}>
          
         <div>   <LLink to="/home"> <img src="getstared.png" alt="getstarted" width="100%" height="40px" /> </LLink> </div>
      
            </div>
       
       
        </div>
   
        </Content2>
   
    </AppContainer>)
}



