import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;

      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-color: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      margin-top: 16px;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 700;
      font-size: 21px;
    }
  }
`;
