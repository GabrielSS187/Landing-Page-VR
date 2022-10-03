import styled from "styled-components";

interface Props {
  image?: string;
  largeImage?: string;
};

export const CreationText = styled.p`
  position: absolute;
  bottom: 26px;
  left: 26px;
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  padding-right: 4vw;
  transition: all 0.3s ease;

  @media only screen and (max-width: 1074px) {
    padding-right: 6vw;
  }

  @media only screen and (max-width: 910px) {
    font-size: 1.4rem;
    bottom: 18px;
    left: 18px;
  }

  @media only screen and (max-width: 782px) {
    bottom: 22px;
    left: 22px;
  }

  @media only screen and (max-width: 395px) {
    font-size: 1.2rem;
    bottom: 16px;
    left: 16px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
`;

export const CreationContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 350px;
  background-image: url(${({ image }: Props) => image});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 910px) {
    max-width: 280px;
    height: 320px;
  }

  @media only screen and (max-width: 782px) {
    max-width: 100%;
    max-height: 240px;
    background-image: url(${({ largeImage }: Props) => largeImage});
  }

  @media only screen and (max-width: 530px) {
    left: 50%;
    transform: translateX(-50%);
    max-width: 90%;
    max-height: 180px;
  }

  @media only screen and (max-width: 440px) {
    max-width: 95%;
    max-height: 160px;
  }

  &:hover ${Overlay} {
    background-color: rgba(255, 255, 255, 0.65);
  }

  &:hover ${CreationText} {
    color: var(--black);
  }
`;