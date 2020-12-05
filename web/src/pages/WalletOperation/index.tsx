import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import WalletOperation from "../../models/wallet-operation.interface";
import WalletProxy from "../../services/wallet.proxy";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (operation: WalletOperation) => {
    //validations

    try {
      const schema = Yup.object().shape({
        description: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        categories: Yup.string().required("Required"),
        account: Yup.string().required("Required"),
        date: Yup.string().required("Required"),
        amount: Yup.number().required("Required"),
      });

      await schema.validate(operation, { abortEarly: false });
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
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
