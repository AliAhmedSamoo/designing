import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Modelimg from '../../images/Model.jpg';
import Form from './form';

const Background = styled.div`
width: 100%;
  height: 300px;
 background: #ccc;
//background: rgba(0, 0, 0, 0.8);
  
display: flex;
align-items: center;
justify-content: center;
 
 

`;

const ModalWrapper = styled.div`
  width: 100%;
  height:300px;
  
   background: #000;
  color: #000;
 display: grid;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 80%;
  height: 300px;
  border-radius: 10px 0 0 10px;
  background: #000;
  //background: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`

display: flex;
width: 70%;
  height: 2px;  

  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-left: 50px;
  margin-bottom: 0px;
  border: #000;
  margin-top: 120px;
 // background: rgba(0, 0, 0, 0.8);
 
  p {
    right: 8px;
    width: 200px;
    margin-right: 300px;
   
    margin-top: 80px;
    //background: rgba(0, 0, 0, 0.8);
  }

  form {
    height: 888px;
    // right: 8px;
    width: 500px;
    margin-right: 30px;
    margin-top: 0px;
   // background: rgba(0, 0, 0, 0.8);
  }
 
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  
 
`;



export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
             <ModalImg src={Modelimg} alt='camera' />
            
                <p>Send your Message</p>
              
                <Form/>
                
                
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
