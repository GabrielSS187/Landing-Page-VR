import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--black);
`;

export const FooterWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 45px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 910px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 910px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 150px;
  object-fit: contain;
  padding-bottom: 30px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 910px) {
    margin-top: 40px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 30px;
  text-align: right;

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 910px) {
    text-align: center;
    padding-bottom: 12px;
  }

  .MuiSvgIcon-root {
    width: 28px;
    height: 28px;
    color: var(--white);
    margin-left: 10px;
    cursor: pointer;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    :hover {
      border-bottom: 1px solid var(--white);
    }
  }
`;

export const Copyright = styled.p`
  color: var(--white);

  @media only screen and (max-width: 380px) {
    font-size: 14px;
  }
`;
