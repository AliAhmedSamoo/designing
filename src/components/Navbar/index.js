import React from 'react';
import 'antd/dist/antd.css';
import '../Navbar/Header.css';
import Logo from '../../images/Logo.png';
import { createFromIconfontCN } from '@ant-design/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});





const Navbar = () => {
  // const [state,setState]=useState(false);
  // let facebookurl="/";
  // let instagramurl="";
  // let twitterurl="";
  // let youtubeurl="";


  return (
    <>

      <div class="Helpline_and_icon" >
        <span class="Helpline">Helpline: 03xxxxxxxxx</span>

        <div className="icons-list">
        <a href="https://www.facebook.com"> <FacebookIcon/></a>
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
        <NavLink to='/'>
          {/* <div>logo</div> */}
          <img src={Logo} width="120px" height="115px" alt='logo'  display= 'flex'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          //  margin:'10px'
          }}
          
          
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
