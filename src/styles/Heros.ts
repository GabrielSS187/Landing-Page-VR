import styled from "styled-components";

import heroImageMobile from "../shared/assets/mobile/image-hero.jpg";
import heroImage from "../shared/assets/image-hero.jpg";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: ${`url(${heroImage})`};
  overflow: hidden;

  @media only screen and (max-width: 530px) {
    height: 100vh;
  }

  @media only screen and (max-width: 530px) {
    background-image: ${`url(${heroImageMobile})`};
  }
`;

export const HeroTextContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const HeroText = styled.div`
  width: 50%;
  min-width: 500px;
  padding: 27px;
  border: 1px solid white;

  @media only screen and (max-width: 910px) {
    min-width: 430px;
  }

  @media only screen and (max-width: 530px) {
    width: 100%;
  }

  @media only screen and (max-width: 510px) {
    min-width: unset;
  }

  h3 {
    font-size: 3.1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--white);
    line-height: 53px;

    @media only screen and (max-width: 910px) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 530px) {
      padding-right: 20px;
    }

    @media only screen and (max-width: 440px) {
      font-size: 2.2rem;
    }
  }
`;

export const HeroWrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;