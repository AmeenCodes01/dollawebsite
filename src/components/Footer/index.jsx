import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialMediaWrap,
} from "./FooterElements";
function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>{" "}
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>{" "}
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>{" "}
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>{" "}
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
