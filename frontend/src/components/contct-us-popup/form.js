import React, { useContext,useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input,message } from 'antd';
import {Btn} from '../Button'
import { AccountContext } from "./accountContext";

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




function Formmm() {
 
    const { CloseModal } = useContext(AccountContext);
    
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
           console.log(CloseModal)
       }
       
       else{
        
        
           message.success("Thank you for Contacting us");
           console.log("Thank you for Contacting us");
           
         //  switchToSignin()
         //  History.push("/signin");
       }
     
   
      }


















    return (
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
    )
}

export default Formmm
