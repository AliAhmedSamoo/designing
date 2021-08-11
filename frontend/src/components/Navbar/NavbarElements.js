import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
background: #fff; 
height: 80px;
width: 100%;
// position: fixed;
box-shadow: 0px 2px 2px 2px;
z-indux: -1;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  border-radius: 0  0 5px 5px ;

  
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 70%;
  width: 100px;
  cursor: pointer;
  border-radius:10px;

  &.active {
//background:#013463; 
    color: #F48B18;
   
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #013463;
    color: #F48B18;

    
  }

  @media screen and (max-width: 805px) {

    height: 50px;
    width: 100px;

  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #F48B18;

  @media screen and (max-width: 805px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
   margin-right: 24px; 

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 805px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 805px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
height: 80px;
width: 150px;
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltOnWb8DwIGlyUE-k6WksPWBBWvcB0p-fNg&usqp=CAU);
padding: 10px 22px;
color: #000;
//background-color: #000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
border-color: #000;
/* Second Nav */
margin-left: 0px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #013463;
    color: #013463;

    
  }
`;

export const Dropmanu = styled.div`

display: none;

@media screen and (max-width: 805px) {  
  display: flex;
  width: 210px;
  box-shadow: 0px 2px 2px 2px;
  background: #FFFFFF;
   right: 0;
   //background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArkhS4-u2dvj2xcdwtzI8xjR9pZisnIQdZQ&usqp=CAU);
   height: auto;
   position: absolute;
   z-index: 4;
   border-radius: 0  0 10px 10px ;
  }
`;

export const Mobmanubox = styled.div`

width: auto;
height: auto;
margin-left:50%

`;

