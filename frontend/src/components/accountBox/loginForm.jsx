import React, { useContext, useState  } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [user, setUser] = useState({
     email: "", password: "",
  })
  let name, value;
  const handleInputs =(e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user , [name]:value});
  }
  return (
    <BoxContainer>
      <FormContainer>
        
       <Input type="email" placeholder="Email" id="email" name="email" required= 'true' onChange={handleInputs}  /> 
        <Input type="password" placeholder="Password" id="password" name="password" required= 'true' onChange={handleInputs} />
 
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton Type="submit" > Sign in </SubmitButton>
   
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <p>
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
        Signup
      </BoldLink>
      </p>

      


    </BoxContainer>
  );
}
