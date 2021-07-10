import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../contct-us-popup/Modal';
import { Btn } from '../Button'

import Footer from './index';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



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
                       
                       
                            <Footer.info >Tel: +92-21-34323721-4</Footer.info>
                            <Btn onClick={openModal}>Contact Us</Btn>

                    


                   

                   

                       
                    </Footer.Row>
                    

                </Footer.Wrapper>
                <Modal showModal={showModal} setShowModal={setShowModal} />

            </Footer>


        </>
    );
}