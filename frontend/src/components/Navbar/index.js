import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../Navbar/Header.css';

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
        <Link to='/home'>
          {/* <div>logo</div> */}
          <img src="logo.png" width="100px" height="70px"  alt='logo' display='flex'
            style={{
              // top: `2px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //  margin:'10px'
            }}


          />
        </Link>
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

          {email === 'aliahmed.samoo.1@gmail.com' && <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>}

          {email != 'null' && <NavLink to='/profile' activeStyle> 
            Profile
          </NavLink >}
         
          {email === 'null' && <NavLink to='/signin'  > Sign In</NavLink>}

         {email != 'null' && <NavLink to='/signin' onClick={()=>{ 
           localStorage.setItem('email' , "null")
           localStorage.removeItem('name')  
            }}>Log out</NavLink> }
        </NavMenu>





      </Nav>

      {Mobmanu  && (


        < Dropmanu>
          <Mobmanubox>
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

          {email === 'aliahmed.samoo.1@gmail.com' && <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>}

          {email != 'null' && <NavLink to='/profile' activeStyle> 
            Profile
          </NavLink >}
         
          {email === 'null' && <Link to='/signin'  > <Btn >Sign In</Btn></Link>}

         {email != 'null' && <Link to='/signin'  > <Btn onClick={()=>{ 
           localStorage.setItem('email' , "null")
           localStorage.removeItem('name')  
            }}>Log out</Btn></Link> }
          </Mobmanubox>
        </ Dropmanu>)}
    </>
  );
};

export default Navbar;
