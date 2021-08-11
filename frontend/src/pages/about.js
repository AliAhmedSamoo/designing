//import { styled } from '@material-ui/core';
import React, { useEffect  } from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar/index';
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const AppContainer = styled.div`
  
//background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqdndIocrSTV5xYSE7eNFHshBjPiGv11XqA&usqp=CAU);
background-Size: 150%;
  //  width: 2200px;
    height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;
const TextContainer = styled.div`
  
 // background-image: url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80);
   background-Size: 100%;
    image
   width: 100%;
    height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;
const ServicesContainer = styled.div`
  
//background-image: url(https://www.citysidedrivingschool.co.uk/wp-content/uploads/2014/12/banner-1.jpg);

background-Size: 100%;
    width: 80%;
    height: auto;
   // background: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
    margin: 5px;
    border-radius: 5px;
 
`;






const About = () => {
  const emaillll = localStorage.getItem('email')
  if (emaillll === null ){ localStorage.setItem('email','null')   }
 




  return (
   <> <Navbar/><div style={({ height: `80px` })}> </div>
      <AppContainer>
        

      
          <ServicesContainer>
            <TextContainer>
            <h1><strong>About Us</strong></h1> 
            <p> We are a car rental platform which provides online car rental services. Our platform works by connecting people who are willing to give their cars on rent with people who want a car. </p>

            <p> In Pakistan, getting car rentals is a really big problem as people don’t provide good services and there is almost no platform which is offering online car rental services, so we saw this problem and here we are trying to help you by providing online car rental services which you can avail from the comfort of your home with just a few clicks.  
                Here at our platform we are connecting people together and making the procedure extremely simple and convenient for both the parties. You can get any car available of your choice from the wide range of cars being offered on our website. </p>
            <p> We have introduced this new model of letting people earn passive income by giving their cars on rent, as previously there is no such platform which allows common people to earn money with their cars. </p>

            
            </TextContainer>

            <TextContainer>
              <h2><strong>Terms and Conditions</strong></h2>

                <p>Welcome to Rentacar.com!</p>

                <p>These terms and conditions outline the rules and regulations for the use of Rent A Car's Website, located at Rentacar.com.</p>

                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Rentacar.com if you do not agree to take all of the terms and conditions stated on this page.</p>

                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                <h3><strong>Cookies</strong></h3>

                <p>We employ the use of cookies. By accessing Rentacar.com, you agreed to use cookies in agreement with the Rent A Car's Privacy Policy. </p>

                <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                <h3><strong>License</strong></h3>

                <p>Unless otherwise stated, Rent A Car and/or its licensors own the intellectual property rights for all material on Rentacar.com. All intellectual property rights are reserved. You may access this from Rentacar.com for your own personal use subjected to restrictions set in these terms and conditions.</p>

                <p>You must not:</p>
                <ul>
                    <li>Republish material from Rentacar.com</li>
                    <li>Sell, rent or sub-license material from Rentacar.com</li>
                    <li>Reproduce, duplicate or copy material from Rentacar.com</li>
                    <li>Redistribute content from Rentacar.com</li>
                </ul>

                <p>This Agreement shall begin on the date hereof.</p>

                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Rent A Car does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Rent A Car,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Rent A Car shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                <p>Rent A Car reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

                <p>You warrant and represent that:</p>

                <ul>
                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>

                <p>You hereby grant Rent A Car a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

                <h3><strong>Hyperlinking to our Content</strong></h3>

                <p>The following organizations may link to our Website without prior written approval:</p>

                <ul>
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>

                <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                <p>We may consider and approve other link requests from the following types of organizations:</p>

                <ul>
                    <li>commonly-known consumer and/or business information sources;</li>
                    <li>dot.com community sites;</li>
                    <li>associations or other groups representing charities;</li>
                    <li>online directory distributors;</li>
                    <li>internet portals;</li>
                    <li>accounting, law and consulting firms; and</li>
                    <li>educational institutions and trade associations.</li>
                </ul>

                <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Rent A Car; and (d) the link is in the context of general resource information.</p>

                <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

                <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Rent A Car. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

                <p>Approved organizations may hyperlink to our Website as follows:</p>

                <ul>
                    <li>By use of our corporate name; or</li>
                    <li>By use of the uniform resource locator being linked to; or</li>
                    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                </ul>

                <p>No use of Rent A Car's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                <h3><strong>Liability</strong></h3>

                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                <h3><strong>Privacy Policy</strong></h3>

                <p>Any information that you give to the other party that you are dealing with, we are not responsible for it.</p>

                <h3><strong>Reservation of Rights</strong></h3>

                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                <h3><strong>Removal of links from our website</strong></h3>

                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

                <h3><strong>Disclaimer</strong></h3>

                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

                <ul>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>

                <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

                <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
            </TextContainer>




          </ServicesContainer>

  
      </AppContainer>


</>

        );
}

        export default About;
