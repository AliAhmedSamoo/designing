import React, { useRef, useEffect, useCallback, useState  } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Form, Input, message } from 'antd';
import { MdClose } from 'react-icons/md';
import {Btn} from '../Button'







// const layout = {
//   labelCol: {
//       span: 8,
//   },
//   wrapperCol: {
//       span: 16,
//   },
// };
// /* eslint-disable no-template-curly-in-string */

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//       email: '${label} is not a valid email!',
//       number: '${label} is not a valid number!',
//   },
//   number: {
//       range: '${label} must be between ${min} and ${max}',
//   },
// };



const Background = styled.div`
 
top : 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 570px) {
   
    display: none;
    }
`;

const ModalWrapper = styled.div`
  width: 120%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media screen and (max-width: 100px) {
   
    width: 50%;
    height: 500px;
    
    }
  @media screen and (max-width: 800px) {
   
    width: 80%;
    height: 500px;
    
    }

`;

const ModalImg = styled.img`
  width: 300px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  @media screen and (max-width: 800px) {
    display: none; 
    
    
    }



  `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
   justify-content: center;
  //align-items: center;
   line-height: 1.8;
  color: #141414;

  // p {
  //   margin-bottom: 1rem;
  // }

  // button {
  //   padding: 10px 24px;
  //   background: #141414;
  //   color: #fff;
  //   border: none;
  // }
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

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

 const FormContainer = styled.form`
  width: 90%;
  left: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;


const Iinput = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  border-radius: 10px;
  margin: 3px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
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

  const closeModall = () => {
    
      setShowModal(false);
    
  };


 
    
    const [Messegee, setMessegee] = useState({
        name: "", email: "", messege :"",
      })

      let name, value;
      const handleInputs =(e)=>{
          console.log(e);
          name = e.target.name;
          value = e.target.value;
  
          setMessegee({...Messegee , [name]:value});
      }

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
    

  const PostData = async (e) => {
   
    e.preventDefault();
   
   const { name, email, messege } = Messegee;
  
  
  
  
  
  
   const res =  await fetch("https://rent-a-car-pakistan.herokuapp.com/messeges", {
   
   
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
        name, email, messege
     })

   });

  
   
  
   if(res.status == 422){
     
       message.error("please fill all fields");
       console.log("please fill all fields");
       
   }
   
   else{
    
    
       message.success("Thank you for Contacting us");
       console.log("Thank you for Contacting us");
       closeModall()
     
   }
 

  }
 

  
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src='https://images.unsplash.com/photo-1603980928123-ee86cefbe233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' alt='camera' />
              <ModalContent>
              
              <h1>Send your message to admin</h1>
              <FormContainer   onSubmit={PostData} > 
              <Iinput placeholder="Your name" required="ture" name="name" onChange={handleInputs} />
              <Iinput  placeholder="Your email" required="ture" type="email" name="email" onChange={handleInputs} />
              <Iinput placeholder="Your Message for admin" required="ture" name="messege" onChange={handleInputs} />
              <Btn type="primary" htmlType="submit" > Send message</Btn>

                </FormContainer> 
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