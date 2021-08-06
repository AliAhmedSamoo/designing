import React, { useRef, useEffect, useCallback, useState  } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Form, Input, message } from 'antd';
import { MdClose } from 'react-icons/md';
import {Btn} from '../Button'

const layout = {
  labelCol: {
      span: 8,
  },
  wrapperCol: {
      span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
  },
  number: {
      range: '${label} must be between ${min} and ${max}',
  },
};



const Background = styled.div`
width: 100%;

 background: #000;
//background: rgba(0, 0, 0, 0.8);
  
// display: flex;
align-items: center;
justify-content: center;
 
 

`;

const ModalWrapper = styled.div`
   width: 100%;
   height:300px;
  
   background: #999;
   color: #000;
   display: grid;
   grid-template-columns: auto auto auto auto;
   border-radius: 10px;
`;

// const ModalImg = styled.img`
//   // width: 80%;
//   // height: 300px;
//   border-radius: 10px 0 0 10px;
//   //background: #000;
//   //background: rgba(0, 0, 0, 0.8);
//   margin-top: 60px;
//   @media screen and (max-width: 200px) {
//     display: none;
//   }
// `;

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



export const Modal = ({ showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });



  const CloseModall = () => {
  
    setTimeout(() => {
      setShowModal(false);
    }, 400);
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
  
  
  
  
  
  
   const res =  await fetch("/messeges", {
   
   
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
       CloseModall()
     
   }
 

  }
 

  return (
     
   <>
      {showModal ? (
      //  <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
             {/* <ModalImg src={Modelimg} alt='camera' width="10%" height="300px" /> */}
            
                <p>Send your Message</p>
               
                <Form {...layout}  name="nest-messages"  validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input name="name" onChange={handleInputs} />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input name="email" onChange={handleInputs} />
            </Form.Item>
           
            <Form.Item name={['user', 'introduction']} label="Your Message">
                <Input.TextArea name="messege" onChange={handleInputs} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Btn type="primary" htmlType="submit" onClick={PostData} >
                    Submit
                </Btn>
            </Form.Item>
        </Form>
                
                
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
      //  </Background>
      ) : null}
    </>
  );
};

