import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Wallet Operation</h1>

      <form>
        <input name="description" placeholder="Description"></input>
        <input name="title" placeholder="Title"></input>
        <input name="type" placeholder="Type"></input>
        <input name="categories" placeholder="Category"></input>
        <input name="amount" placeholder="Amount"></input>
        <input name="account" placeholder="Account"></input>
        <input name="date" placeholder="Date"></input>
      </form>
    </>
  );
};

export default Dashboard;
