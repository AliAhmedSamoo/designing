import React, { useContext, useState } from "react";
import { message } from 'antd';
import { useHistory } from 'react-router-dom'
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

  const history = useHistory();
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState('');

  const [status, setstatus] = useState("signin");
  const [password, setPassword] = useState('');
  localStorage.setItem('email', null);
  localStorage.setItem('name', null);

  const [emailForget, setEmailForget] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();













    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

    })







    res.json().then(result => localStorage.setItem('name', result))

    //console.log(x)
    if (res.status === 400) {
      message.error("Please enter a valid Email and password");
    } else {


      localStorage.setItem('email', email);
      // localStorage.setItem('name',Name);

      message.success("login Successfull");


      await history.push("/home");
    }



  };

  const Sendpass = async (e) => {
    e.preventDefault();
    const hide = message.loading('Action in progress..', 0);

    const ress = await fetch("/emailuserpass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email

      })

    })


    if (ress.status === 400) {
      setTimeout(hide, 1);
      setEmail("")
     ress.json().then (result => message.error(result));
    } else {



      setTimeout(hide, 1);
      message.success("Password has been sent to email");

      setEmail("")
      setstatus("signin")
    }

  }


  return (
    <BoxContainer>

      {status === "signin" && <>

        <FormContainer method="POST" onSubmit={loginUser} >

          <Input type="email" name="email" id="email"
            required='true'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"

          />
          <Input type="password" name="password" id="password"
           required="true"
           
           pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Marginer direction="vertical" margin={10} />
          <MutedLink onClick={() => { setstatus("forgetpass") }}>Forget your password?</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton Type="submit"  > Sign in </SubmitButton>

        </FormContainer>
        <Marginer direction="vertical" margin="1em" />
        <p>
          Don't have an accoun?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </p>

      </>}

      {status === "forgetpass" && <>
        <FormContainer method="POST" onSubmit={Sendpass} >

          <Input type="email" name="email" id="email"
            required='true'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"

          />

          <Marginer direction="vertical" margin={10} />
          <MutedLink onClick={() => { setstatus("signin") }}>Sign in</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton Type="submit"  > Send Email </SubmitButton>

        </FormContainer>


      </>}


    </BoxContainer>
  );
}
