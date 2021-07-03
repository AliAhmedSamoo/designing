import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../contct-us-popup/Modal';

import Footer from './index';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';







const Container = styled.div`
  display: flex;
  justify-content: center;
   align-items: top;
  height: 6vh;
`;

const Button = styled.button`
//   min-width: 100px;
  padding: 16px 32px;
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background: #141414;
  color: #fff;
  font-size: 100%;
  align-text: center;
  display: flex;
  align-items: center;
  
  
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

`;













export function FooterContainer() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Come Say Hello!</Footer.Link>
                        <Footer.Link href="#">163 Bangalore Town, Main Shahrah-e-Faisal, Karachi – 75350</Footer.Link>
                        <Footer.Link href="#">Tel: +92-21-34323721-4</Footer.Link>



                        <Footer.Title>
                            <Container>
                                <Button onClick={openModal}>Contact Us</Button>
                                
                            </Container>
                        </Footer.Title>
                    </Footer.Column>
                   
                   
                    <Footer.Column>

                    </Footer.Column>
                    
                    
                    
                    {/* <Footer.Column> */}
                     
                        
                    {/* </Footer.Column> */}
                </Footer.Row>

                <Footer.Title>Social</Footer.Title>
                <Footer.Row>
                     <Footer.Link href="https://www.facebook.com"><FacebookIcon />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/"><InstagramIcon />Instagram</Footer.Link>
                        <Footer.Link href="https://www.youtube.com/"><YouTubeIcon />Youtube</Footer.Link>
                        <Footer.Link href="https://twitter.com/?lang=en"><TwitterIcon />Twitter</Footer.Link>
                        </Footer.Row>

            </Footer.Wrapper>
            <Modal showModal={showModal} setShowModal={setShowModal} />

        </Footer>
        
         
         </>
    );
}