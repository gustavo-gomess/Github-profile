import styled from "styled-components";

export const Body = styled.body`
  height: calc(100vh - 90px);
  width: 100%;
  max-width: 1080px;
  margin: 0px auto;
`;

export const Main = styled.main`
  height: calc(100vh - 90px);
  max-width: 1080px;
  margin: 0px auto;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 50px;

  > input {
    width: 300px;
    height: 50px;
    padding: 10px 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 3px solid rgb(132, 148, 174);
  }

  > button {
    height: 50px;
    padding: 10px 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(101, 121, 154);
  }
`;
export const Texts = styled.div`
  height: 30vh;
  width: 100%;
  margin-top: 30px;
  padding: 0px 10px;
  display: block;

  > img {
    height: 150px;
    width: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 15px;
    border: 5px solid rgb(132, 148, 174);
  }
  > p {
    line-height: 30px;
    padding: 0px 10px;
  }
`;
