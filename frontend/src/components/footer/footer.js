import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../contct-us-popup/Modal';
import { Btn } from '../Button'

import Footer from './index';


const Btnn = styled.div`

  
 display: flex;

 @media screen and (max-width: 580px) {
    display: none;
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
                       
                       
                            <Footer.info >Copyright © 2021 Rent A car Inc.</Footer.info>
                        <Btnn >    <Btn onClick={openModal}>Contact Us</Btn> </Btnn>

                    


                   

                   

                       
                    </Footer.Row>
                    

                </Footer.Wrapper>
                
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Footer>


        </>
    );
}