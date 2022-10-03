import styled from "styled-components";

interface Props {
  isVisible: any;
};

import { List } from "phosphor-react";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  .MuiSvgIcon-root {
    width: 0;
    opacity: 0;
    color: var(--white);
    cursor: pointer;
    transition: width 0.3s ease;

    :hover {
      opacity: 0.8;
    }

    @media only screen and (max-width: 675px) {
      width: 33px;
      height: 33px;
      opacity: 1;
    }
  }
`;

export const HamburgerIconContainer = styled.div<Props>`
  position: absolute;
  right: 0;
  width: 33px;
  height: 33px;
  z-index: 8;
  display: ${({ isVisible }) => (isVisible ? "none" : "block")};
`;

export const CloseIconContainer = styled(HamburgerIconContainer)`
  display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
`;

export const Logo = styled.img`
  width: 20%;
  max-width: 150px;
  cursor: pointer;
  z-index: 8;

  @media only screen and (max-width: 675px) {
    width: 160px;
  }

  @media only screen and (max-width: 530px) {
    width: 170px;
  }
`;

export const IconMenu = styled(List)`
  display: none;

  @media only screen and (max-width: 675px) {
    display: block;
  }
`
