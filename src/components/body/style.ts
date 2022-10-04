import styled, { isStyledComponent } from "styled-components";

export const Container = styled.body`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  div {
    height: calc(100vh - 90px);
    width: 100%;
    max-width: 1080px;
    margin: 0px auto;
    display: flex;
  }

  form {
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 50px;
  }
  input {
    width: 300px;
    height: 50px;
    padding: 10px 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 3px solid rgb(132, 148, 174);
  }

  button {
    height: 50px;
    padding: 10px 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(101, 121, 154);
  }
`;
