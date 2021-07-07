import React from 'react'
import styled from "styled-components";

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


const ProfileContainer = styled.div`
  
//background: #000;
    width: 80%;
    height: 500px;
    display: grid;
    grid-template-columns: auto;
  //  grid-gap: 10px;
    // flex-direction: row;
     align-items: center;
    // justify-content: center;
    margin: 5%;
    border-radius: 50px;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
 
`;

const ProfileContainerleft = styled.div`
  
background-Size: 100%;
    width: 50%;
    height: 300px;
    background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    border-radius: 10px;
 
`;

const ProfileContainerright = styled.div`
  
background-Size: 100%;
    width: 50%;
    height: 300px;
    background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    border-radius: 10px;
 
`;

function profile() {
    return (
      <>
<AppContainer>
<ProfileContainer> <ProfileContainerleft><h1>ali</h1></ProfileContainerleft><ProfileContainerright></ProfileContainerright></ProfileContainer>

</AppContainer>




     </>
    )
}

export default profile
