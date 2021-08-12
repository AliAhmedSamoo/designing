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
  const [emailll, setEmail] = useState('');

  const [status, setstatus] = useState("signin");
  const [password, setPassword] = useState('');
  localStorage.setItem('email', null);
  localStorage.setItem('name', null);

  const [emailForget, setEmailForget] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();









    const hide = message.loading('Action in progress..', 0);

    const email = emailll;

    const res = await fetch('https://rent-a-car-pakistan.herokuapp.com/signin', {
      
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
      setTimeout(hide, 1);
      message.error("Please enter a valid Email and password");
    } else if (res.status === 200) {
      const email = emailll;

      localStorage.setItem('email', email);
      // localStorage.setItem('name',Name);

      message.success("login Successfull");

      setTimeout(hide, 1);
      await history.push("/home");
    }else if (res.status === 402) {


      setTimeout(hide, 1);
      message.error("Please sign up first");
     switchToSignup()
    }



  };

  const Sendpass = async (e) => {
    e.preventDefault();
    const hide = message.loading('Action in progress..', 0);
     const email = emailll;
     setEmail("")
    const ress = await fetch("https://rent-a-car-pakistan.herokuapp.com/emailuserpass", {
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
    } else if (ress.status === 200) {



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
            value={emailll}
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
          <MutedLink onClick={() => { setstatus("forgetpass") }}>Forgot your password?</MutedLink>
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
            value={emailll}
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
