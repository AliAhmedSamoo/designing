import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../Navbar/Header.css';
import Logo from '../../images/Logo.png';
import { createFromIconfontCN } from '@ant-design/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Btn } from '../Button'
import { Link } from 'react-router-dom';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  Dropmanu,
  Mobmanubox
} from './NavbarElements';
import { SdCard } from '@material-ui/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});





const Navbar = () => {
  const [Mobmanu, setMobmanu] = useState(false);
  const [email, setemail] = useState(localStorage.getItem('email'));
//const email = localStorage.getItem('email')

  const Dropmmanu = (e) => {

    setTimeout(() => {
      setMobmanu(current => !current);
    }, 200);
  };

  const onClickkk =()=>{

    localStorage.removeItem('email')
     localStorage.removeItem('name')

  }


  return (
    <>

      <div class="Helpline_and_icon" >
        <span class="Helpline">Helpline: 03xxxxxxxxx</span>

        <div className="icons-list">
          <a href="https://www.facebook.com"> <FacebookIcon /></a>
          <IconFont type="gap" />
          <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
          <IconFont type="pag" />
          <a href="https://twitter.com/?lang=en">  <TwitterIcon /></a>
          <IconFont type="pag" />
          <a href="https://www.youtube.com/">  <YouTubeIcon /></a>
          <IconFont type="pag" />

        </div>



      </div>




      <Nav>
        <NavLink to='/home'>
          {/* <div>logo</div> */}
          <img src={Logo} width="120px" height="115px" alt='logo' display='flex'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //  margin:'10px'
            }}


          />
        </NavLink>
        <Bars onClick={(Dropmmanu)} />
        <NavMenu>


          <NavLink to='/home' activeStyle >
            Home
          </NavLink>


          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>

          {email != 'null' && <NavLink to='/addcar' activeStyle>
            Add Car
          </NavLink>}

          {email != 'null' && <NavLink to='/profile' activeStyle> 
            Profile
          </NavLink >}
         
          {email === 'null' && <Link to='/signin'  > <Btn >Sign In</Btn></Link>}

         {email != 'null' && <Link to='/signin'  > <Btn onClick={()=>{ 
           localStorage.setItem('email' , "null")
           localStorage.removeItem('name')  
            }}>Log out</Btn></Link> }
        </NavMenu>





      </Nav>

      {Mobmanu  && (


        < Dropmanu>
          <Mobmanubox>
            <NavLink to='/home' onClick={Dropmmanu} activeStyle>
              Home
            </NavLink>


            <NavLink to='/about'  onClick={Dropmmanu} activeStyle>
              About
            </NavLink>
            <NavLink to='/services' onClick={Dropmmanu}  activeStyle>
              Services
            </NavLink>

            <NavLink to='/addcar' onClick={Dropmmanu}  activeStyle>
              Add Car
            </NavLink>

            <NavLink to='/profile' onClick={Dropmmanu}  activeStyle>
              Profile
            </NavLink>
            {/* Second Nav */}
            <NavBtnLink to='/signin' onClick={Dropmmanu}  > Sign In</NavBtnLink>
          </Mobmanubox>
        </ Dropmanu>)}
    </>
  );
};

export default Navbar;
