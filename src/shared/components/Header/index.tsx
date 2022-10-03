import { useState } from "react";

import { Navigation } from "../Navigation";

import logo from "../../assets/logo.svg";

import { X } from "phosphor-react";

import { 
  CloseIconContainer,
  HamburgerIconContainer,
  HeaderContainer,
  Logo,
  IconMenu,
 } from "./styles";

export const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleMobileNav = () => {
    if (!isMobileNavActive) {
      // make mobile nav active
      setIsMobileNavActive(true);
      // hide scrollbar
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobileNav = () => {
    // make mobile nav inactive
    setIsMobileNavActive(false);
    // show scrollbar back
    document.body.style.overflow = "visible";
  };

  return (
    <HeaderContainer>
      <Logo src={logo} />

      <Navigation isHeader isMobileNavActive={isMobileNavActive} />
      <HamburgerIconContainer isVisible={isMobileNavActive}>
        <IconMenu size={32} color="#fff" 
          onClick={handleMobileNav} 
        />
      </HamburgerIconContainer>
      <CloseIconContainer isVisible={isMobileNavActive}>
        <X size={32} color="#fff" 
          onClick={closeMobileNav}
        />
      </CloseIconContainer>
    </HeaderContainer>
  );
};