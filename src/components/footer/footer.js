import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../contct-us-popup/Modal';
import {Btn} from '../Button'

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
                                <Btn onClick={openModal}>Contact Us</Btn>
                                
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