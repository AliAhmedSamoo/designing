import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" required= 'true' />
        <Input type="email" placeholder="Email" required= 'true' />
        <Input type="password" placeholder="Password" required= 'true' />
        <Input type="password" placeholder="Confirm Password" required= 'true' />
     
      <Marginer direction="vertical" margin={20} />
      
      <SubmitButton type="submit">Sign up</SubmitButton> </FormContainer>
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
