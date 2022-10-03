import styled from "styled-components";

export const FeaturesSection = styled.section`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

export const FeaturesText = styled.div`
  width: 55%;
  max-height: 280px;
  min-width: 500px;
  position: absolute;
  right: 5vw;
  bottom: 0;
  background-color: white;
  padding: 70px 0 0 70px;

  @media only screen and (max-width: 1244px) {
    padding: 50px 0 0 50px;
    right: 0;
  }

  @media only screen and (max-width: 1084px) {
    right: -8vw;
  }

  @media only screen and (max-width: 996px) {
    position: relative;
    right: 0;
    margin-top: 30px;
    padding: 0;
    width: 90%;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: var(--black);
    padding-right: 50px;

    @media only screen and (max-width: 996px) {
      padding-right: 0;
    }

    @media only screen and (max-width: 763px) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: 675px) {
      font-size: 1.6rem;
      text-align: center;
    }

    @media only screen and (max-width: 530px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 440px) {
      font-size: 1.3rem;
    }

    @media only screen and (max-width: 395px) {
      font-size: 1.3rem;
      padding: 0 28vw;
      line-height: 26px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: var(--dark-gray);
    line-height: 22px;
    padding-right: 60px;

    @media only screen and (max-width: 996px) {
      padding-right: 0;
    }

    @media only screen and (max-width: 675px) {
      font-size: 14px;
      text-align: center;
      padding: 0 10px;
    }

    @media only screen and (max-width: 530px) {
      padding: 0 50px;
    }

    @media only screen and (max-width: 440px) {
      padding: 0 90px;
    }

    @media only screen and (max-width: 395px) {
      padding: 0 124px;
    }
  }
`;

export const FeaturesImg = styled.img`
  width: 50%;
  min-width: 600px;
  object: contain;

  @media only screen and (max-width: 1244px) {
    min-width: 500px;
  }

  @media only screen and (max-width: 996px) {
    width: 100%;
    max-height: 340px;
  }

  @media only screen and (max-width: 530px) {
    min-width: unset;
    width: 94%;
  }
`;