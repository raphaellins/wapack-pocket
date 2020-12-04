import React, { useCallback } from "react";
import { Form } from "@unform/web";
import WalletOperation from "../../models/wallet-operation.interface";
import WalletProxy from "../../services/wallet.proxy";

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(async (operation: WalletOperation) => {
    //validations

    //execution
    await new WalletProxy().createOperation(operation);
  }, []);

  return (
    <>
      <h1>Wallet Operation</h1>

      <Form onSubmit={handleSubmit}>
        <input name="description" placeholder="Description"></input>
        <input name="title" placeholder="Title"></input>
        <input name="type" placeholder="Type"></input>
        <input name="categories" placeholder="Category"></input>
        <input name="amount" placeholder="Amount"></input>
        <input name="account" placeholder="Account"></input>
        <input name="date" placeholder="Date"></input>
      </Form>
    </>
  );
};

export default Dashboard;
