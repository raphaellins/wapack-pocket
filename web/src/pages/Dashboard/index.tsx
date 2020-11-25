import React, { useEffect, useState } from "react";
import { Operation, OperationDay, Container, WalletDetail } from "./styles";
import { useHistory } from "react-router-dom";

import WalletProxy from "../../services/wallet.proxy";

import { useAuth } from "../../hooks/AuthContext";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import { FaMinus, FaPlus, FaEquals } from "react-icons/fa";
import WalletOperation from "../../models/wallet-operation.interface";

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [operations, setOperations] = useState<WalletOperation[]>([]);
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();

    history.push("/");
  };

  useEffect(() => {
    async function loadOperations() {
      const data = await new WalletProxy().listAllOperations(
        new Date(2020, 11, 23)
      );

      setOperations(data);
    }

    loadOperations();
  }, []);

  return (
    <Container>
      <button type="submit" onClick={handleSignOut}>
        Log Out
      </button>
      <header>
        <button type="submit">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>November / 20</strong>
        <button type="submit">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {operations.map((operation) => (
          <Operation>
            <OperationDay>
              <p>21</p>
              <strong>NOV</strong>
            </OperationDay>
            <span>{operation.operationTitle}</span>
            <p>R$ {operation.amount}</p>
          </Operation>
        ))}
      </ul>

      <ul>
        <WalletDetail>
          <FaPlus size={16} color="#FFF"></FaPlus>
          <p>income</p>
          <p>R$ 3.000,00</p>
        </WalletDetail>

        <WalletDetail>
          <FaMinus size={16} color="#FFF"></FaMinus>
          <p>expense</p>
          <p>R$ 3.000,00</p>
        </WalletDetail>

        <WalletDetail>
          <FaEquals size={16} color="#FFF"></FaEquals>
          <p>balance</p>
          <p>R$ 3.000,00</p>
        </WalletDetail>
      </ul>
    </Container>
  );
};

export default Dashboard;
