import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../contct-us-popup/Modal';
import { Btn } from '../Button'
import { createFromIconfontCN } from '@ant-design/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Footer from './index';
import '../Navbar/Header.css';

const Btnn = styled.div`

  
 display: flex;

 @media screen and (max-width: 580px) {
    display: none;
     }
 

`;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });


export function FooterContainer() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>  <Modal showModal={showModal} setShowModal={setShowModal} />
            <Footer>
                <Footer.Wrapper>
                   
                       
                       
                           Copyright © 2021 Rent A car Inc.
                        <Btnn >    <Btn onClick={openModal}>Contact Us</Btn> </Btnn>

                    


                    <div class="Helpline_and_icon" >
        <span class="Helpline">Helpline: 03xxxxxxxxx</span>

        <div className="icons-list">
          <a href="https://www.facebook.com"> <FacebookIcon /></a>
          <IconFont type="gap" />
          <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
          <IconFont type="pag" />
          <a href="https://twitter.com/?lang=en">  <TwitterIcon /></a>
          <IconFont type="pag" />
          <a href="https://www.youtube.com/">  <YouTubeIcon /></a>
          <IconFont type="pag" />

        </div>



      </div>

                   

                       
                   
                    

                </Footer.Wrapper>
                
              
            </Footer>


        </>
    );
}