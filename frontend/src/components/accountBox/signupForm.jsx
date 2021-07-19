import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useHistory} from 'react-router-dom'









export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
const history= useHistory;
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
    const { name, email, password, cpassword } = user;
    await fetch("/Registor", {
    
    
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
       user
      })

    });
   }

  return (
    <BoxContainer>
      <FormContainer >
        <Input type="text"  name="name" placeholder="Full Name" required='true' value={user.name} onChange={handleInputs} />
        <Input type="email"  name="email" placeholder="Email" required='true' value={user.email} onChange={handleInputs} />
        <Input type="password"  name="password" placeholder="Password" required='true' value={user.password} onChange={handleInputs} />
        <Input type="password"  name="cpassword" placeholder="Confirm Password" required='true' value={user.cpassword} onChange={handleInputs} />

        <Marginer direction="vertical" margin={20} />

        <SubmitButton type="submit" onClick={PostData} >Sign up</SubmitButton> </FormContainer>
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
