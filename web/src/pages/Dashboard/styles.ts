import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    color: #000;

    button {
      border: 0;
      background: none;
      background-color: #000;
    }

    strong {
      color: #000;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

const Operation = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  padding-right: 5px;
  margin-bottom: 10px;

  span {
    display: block;
    margin-top: 3px;
    color: #666;
    font-size: 12px;
  }

  p {
    color: #666;
    font-size: 12px;
  }
`;

const OperationDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: #000;
    font-weight: normal;
    font-size: 10px;
  }

  p {
    letter-spacing: 3px;
    font-weight: 800;
  }
`;

const WalletDetail = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #000000;
  }
`;

export { Container, Operation, OperationDay, WalletDetail };
