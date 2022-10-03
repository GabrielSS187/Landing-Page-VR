import styled from "styled-components";

interface Props {
  isHeader?: any;
  isMobileNavActive?: any;
};

export const NavigationContainer = styled.div<Props>`
  transition: width 0.2s ease-in-out;

  @media only screen and (max-width: 675px) {
    ${({ isHeader }: Props) => isHeader && 
      `
        width: 0;
        opacity: 0; 
      `
    }

      ${({ isHeader, isMobileNavActive }: Props) =>
        isHeader &&
        isMobileNavActive &&
        `
          position: fixed;
          top: 0;
          left: 0;
          opacity: 1;
          width: 100%;
          height: 100vh;
          background: var(--black);
          z-index: 5;
        `
        }
     }


  ul {
    position: relative;
    list-style-type: none;
    z-index: 8;


    @media only screen and (max-width: 675px) {
      ${({ isHeader }: Props) =>
        isHeader &&
          ` 
            position: relative;
            top: 33vh;
            left: 7vw;
          `
        }
    }

    li {
      display: inline-block;
      margin-right: 25px;

      @media only screen and (max-width: 675px) {
        ${({ isHeader }: Props) =>
          isHeader &&
          `
            display: block;
            margin-right: 0;
            margin-bottom: 20px;
        `
        }
      }

      @media only screen and (max-width: 520px) {
        ${({ isHeader }: Props) =>
          !isHeader &&
          `
            display: block;
            margin-right: 0;
            margin-bottom: 20px;
            text-align: center;
        `
        }
      }

      a {
        text-decoration: none;
        font-size: 15px;
        color: var(--white);
        padding-bottom: 4px;
        transition: all 0.3s ease;

        @media only screen and (max-width: 675px) {
          ${({ isHeader }: Props) =>
            isHeader &&
            ` 
                font-size: 1.3rem;
                font-weight: 300;
                text-transform: uppercase;
                color: var(--white);

                :hover {
                  font-size: 1.4rem;
                }
            `
            }
        }

        :hover {
          border-bottom: 1px solid var(--white);
        }
      }
    }
  }
`;
