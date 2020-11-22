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

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
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
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;

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
  background-color: #7159c1;
  border-radius: 4px;

  strong {
    color: #ccc;
    font-size: 14px;
  }

  span {
  }
`;

const WalletDetail = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  border-radius: 5px;

  p {
    color: #fffbfa;
  }
`;

export { Container, Operation, OperationDay, WalletDetail };
