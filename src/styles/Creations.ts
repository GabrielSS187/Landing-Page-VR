import styled from "styled-components";

export const CreationsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 17vh;

  @media only screen and (max-width: 1074px) {
    margin-top: 22vh;
  }

  @media only screen and (max-width: 675px) {
    padding-bottom: 20vh;
  }

  @media only screen and (max-width: 530px) {
    margin-top: 13vh;
    padding-bottom: 18vh;
  }
`;

export const CreationsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 675px) {
    justify-content: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--black);

    @media only screen and (max-width: 675px) {
      font-size: 1.6rem;
      text-align: center;
    }

    @media only screen and (max-width: 440px) {
      font-size: 1.4rem;
    }
  }

  button {
    min-width: 130px;
    padding: 10px;
    border: 1px solid var(--black);
    background: transparent;
    cursor: pointer;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 675px) {
      position: absolute;
      bottom: 2vh;
      min-width: 150px;
    }

    @media only screen and (max-width: 530px) {
      bottom: 0;
    }

    :hover {
      background-color: var(--black);
      color: var(--white);
    }
  }
`;

export const CreationsBodyGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 10vh;

  @media only screen and (max-width: 1074px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 782px) {
    grid-template-columns: 1fr;
  }
`;