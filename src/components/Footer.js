import React from "react";
import { FooterContainer, FooterStyling } from "./styles/Footer.styled";
import { Logo } from './styles/Header.styled'


export const Footer = () => {
  return(
    <FooterContainer>
            <FooterStyling>
              <div>
                  <Logo src="./images/Shorty (1).svg" />
              </div>
              <div>
           <ul>
               <span>Features</span>
               <li><a href="">Link Shortening</a></li>
               <li><a href="">Branded Links</a></li>
               <li><a href="">Analytics</a></li>
           </ul>
           </div>
           <div>
           <ul>
               <span>Resources</span>
               <li><a href="">Blog</a></li>
               <li><a href="">Developers</a></li>
               <li><a href="">Support</a></li>
           </ul>
           </div>
           <div>
           <ul>
               <span>Company</span>
               <li><a href="">About</a></li>
               <li><a href="">Careers</a></li>
               <li><a href="">Contact</a></li>
           </ul>
           </div>
           <div>
               <img src="./images/icon-facebook.svg" alt="" />
               <img src="./images/icon-instagram.svg" alt="" />
               <img src="./images/icon-pinterest.svg" alt="" />
               <img src="./images/icon-twitter.svg" alt="" />
           </div>
        </FooterStyling>
     </FooterContainer>
  )
};
