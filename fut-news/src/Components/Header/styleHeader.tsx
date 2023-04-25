import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 6.5625rem;

  background-color: #000000;

  display: flex;
  justify-content: space-around;

  align-items: center;

  .liveMatchs {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 90%;
    width: 350px;

    h3 {
      text-align: center;
      color: white;
    }

    ul {
      display: flex;
      align-items: center;

      height: 100%;

      background-color: #ffffff;

      display: flex;

      border-radius: 5px;

      padding: 5px 10px;

      li {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        border-left: 1px solid #00000052;
        border-right: 1px solid #00000052;

        height: 100%;

        padding: 0 8px;
      }
    }
  }

  .logo {
    h1 {
      color: white;
      text-align: center;
    }
  }

  nav {
    display: flex;

    img {
      object-fit: contain;
    }
  }
`;
