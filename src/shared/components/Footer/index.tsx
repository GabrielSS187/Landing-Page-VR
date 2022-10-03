import { Navigation } from "../Navigation";

import logo from "../../assets/logo.svg";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Icons,
  Links,
  Logo,
  Social,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Links>
          <Logo src={logo} />
          <Navigation />
        </Links>
        <Social>
          <Icons>
            <button>
              <a href="https://www.linkedin.com/in/gabriel-silva-souza-developer">
                <LinkedinLogo size={32} color="#1b66de" />
              </a>
            </button>
            <button>
              <a href="https://github.com/GabrielSS187/Landing-Page-VR">
                <GithubLogo size={32} color="#1b66de" />
              </a>
            </button>
          </Icons>
          <Copyright>
            &#169; {new Date().getFullYear()} Feito por Gabriel Silva ❤.
          </Copyright>
        </Social>
      </FooterWrapper>
    </FooterContainer>
  );
};