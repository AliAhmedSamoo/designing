import React, { useContext, useState  } from "react";
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
  const [email, setEmail]= useState('');
  const [Name, setName]= useState('');
  const [status, setstatus]= useState('');
  const[password, setPassword] = useState('');
  // localStorage.setItem('email',null);
  // localStorage.setItem('name',null);

  const loginUser = async(e)=>{
     e.preventDefault();
     

   const res = await fetch('/signin',{
       method:"POST",
       headers:{
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({
          email,
          password
      })
     
   });
  //.then(response => 
  //   {
  //    // setstatus(response)
  //     response.text()
  //   }
    
  //   )
  //  .then(result => setName(result))
  //  .catch(error => console.log('error', error));

   


   console.log(Name)
   console.log(status)
    if (res.status === 400) {
    message.error("Please enter a valid Email and password");
    }else{


      localStorage.setItem('email',email);
     // localStorage.setItem('name',Name);
      
      message.success("login Successfull");
      
      
      await history.push("/home");
    }

 
   
};




  return (
    <BoxContainer>
      <FormContainer>
        
       <Input type="email"  name="email" id="email"  
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"

            />
        <Input type="password"  name="password" id="password" 
                      value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                />	
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton Type="submit" onClick={loginUser} > Sign in </SubmitButton>
   
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
