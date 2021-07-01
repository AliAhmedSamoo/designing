import React from 'react'

import styled from "styled-components";
import { AccountBox } from "../components/accountBox";



const AppContainer = styled.div`
  
  background-image: url(https://www.colleylaw.net/wp-content/uploads/2016/03/shutterstock_306053651.jpg);
   background-Size: 80%;
   width: 200%;
  // height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;


function signin() {
    return (
<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      //  margin:'10px'
      }}
    >


      <AppContainer >
      <AccountBox />
    </AppContainer>
    </div>
    
    )
}

export default signin
