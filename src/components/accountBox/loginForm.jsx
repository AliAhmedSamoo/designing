import React, { useContext } from "react";
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

 

  return (
    <BoxContainer>
      <FormContainer>
        
       <Input type="email" placeholder="Email" required= 'true'  /> 
        <Input type="password" placeholder="Password" required= 'true' />
 
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
