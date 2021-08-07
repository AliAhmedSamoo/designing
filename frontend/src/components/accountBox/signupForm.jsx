import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { message } from 'antd';








export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
const History = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: ""
  })

  let name, value;
    const handleInputs =(e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user , [name]:value});
    }

  
  
  
    const PostData = async (e) => {
   
   
     e.preventDefault();
    const { name, email, password } = user;
   
   
   
   
   
   
    const res =  await fetch("/Registor", {
    
    
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })

    });

   
    
   
    if(res.status == 422){
      
        message.error("email already Exit");
        console.log("email already Exit");
    }
    
    else{
     
     
        message.success("Registration Successful");
        console.log("Successful Registration");
        switchToSignin()
      //  History.push("/signin");
    }
  

   }





  return (
    <BoxContainer>
      <FormContainer method="POST" onSubmit={PostData} >
        <Input type="text"  name="name" placeholder="Full Name" required='true' value={user.name} onChange={handleInputs} />
        <Input type="email"  name="email" placeholder="Email" required='true' value={user.email} onChange={handleInputs} />
        <Input type="password" pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase " name="password" placeholder="Password" required='true' value={user.password} onChange={handleInputs} />
        <Input type="password" pattern={user.password}  title="Password and Confirm must be matching" name="cpassword" placeholder="Confirm Password" required='true' />

        <Marginer direction="vertical" margin={20} />

        <SubmitButton type="submit"  >Sign up</SubmitButton> </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <p >
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </p>

    </BoxContainer>
  );
}
