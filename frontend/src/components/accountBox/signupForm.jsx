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

  const [Signupbtn, setSignupbtn] = useState("true")
  const [uservarification, setUservarification] = useState("false")
  const [OTP, setOPT] = useState("")

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }




  const PostData = async (e) => {


    e.preventDefault();
    await setSignupbtn("false")
    const { name, email, password } = user;
    const hide = message.loading('Action in progress..', 0);





    const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/Userssiginandsignup", {


      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })

    });


console.log(res.status)

    if (res.status === 422) {
     
     
      setTimeout(hide, 1);
     
     // res.json().then(result => message.success(result));
     message.error("this email already exist");
     
      setSignupbtn("true")
     
      // switchToSignin()
    }

    else if (res.status == 200) {
      setUservarification("true")
      setTimeout(hide, 1);
      res.json().then(result => message.success(result));
      // console.log("Successful Registration");
      //  switchToSignin()
      await setSignupbtn("true")

    }
    else {
      setTimeout(hide, 1);
      await setSignupbtn()
     setUservarification("true")
      message.error("something wrong");
    }


  }

  const Register = async (e) => {


    e.preventDefault();
    const { name, email, password } = user;
    const hide = message.loading('Action in progress..', 0);





    const res = await fetch("https://rent-a-car-pakistan.herokuapp.com/Registor", {


      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, OTP
      })

    });




    if (res.status == 422) {
      setTimeout(hide, 1);
      res.json().then(result => message.error(result));

      setOPT("")
    }

    else if (res.status == 200) {

      setTimeout(hide, 1);
      res.json().then(result => message.success(result));
      // console.log("Successful Registration");
      switchToSignin()


    }

    else if (res.status == 404) {

      setTimeout(hide, 1);
      res.json().then(result => message.error(result));
      setUservarification("false")



    }
    else {
      setTimeout(hide, 1);
      switchToSignin()

      message.error("something wrong");
    }


  }


  return (
    <BoxContainer>
      {uservarification === "false" && <> <FormContainer method="POST" onSubmit={PostData} >
        <Input type="text" name="name" placeholder="Full Name" required='true' value={user.name} onChange={handleInputs} />
        <Input type="email" name="email" placeholder="Email" required='true' value={user.email} onChange={handleInputs} />
        <Input type="password" pattern="(?=.*[A-Z]).{6,}" title="Lenght should be 6 chracters and atleast one uppercase " name="password" placeholder="Password" required='true' value={user.password} onChange={handleInputs} />
        <Input type="password" pattern={user.password} title="Password and Confirm must be matching" name="cpassword" placeholder="Confirm Password" required='true' />

        <Marginer direction="vertical" margin={20} />

      {Signupbtn=== "true" && <> <SubmitButton type="submit"  >Sign up</SubmitButton>    </>}           </FormContainer> </>}  
      {Signupbtn=== "false" && <> <SubmitButton onClick={()=>{ message.info("please wait ")}}  >Sign up</SubmitButton>    </>}  

      {uservarification === "true" && <> <FormContainer onSubmit={Register}  >
        <Input pattern="(\d).{0,6}" title="Lenght should number and length should be maximum 7 " name="password" placeholder="enter OTP " required='true' value={OTP} onChange={(e) => { setOPT(e.target.value) }} />
        <h4>OTP has sent to your email if not found check spam too. </h4>
        <Marginer direction="vertical" margin={20} />

        <SubmitButton type="submit"  >Register your Account</SubmitButton> </FormContainer></>}





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
