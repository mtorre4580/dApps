import React, { useState, useMemo } from "react";
import styled from "styled-components";
import ActiveMetaMask from "../ActiveMetaMask";
import Form from "../Form";
import { requestAccess, getBalance, toEther, toWei } from "../../services/web3";
import { getContract } from "../../services/lottery";
import { abi } from "../../contracts/Lottery.json";

const ADDRESS_ACCOUNT = "";

const Title = styled.h2`
  font-weight: 700;
  color: #424242;
  margin: 20px 0;
  font-size: 20px;
`;

const Section = styled.section`
  padding: 10px;
  background-color: #f5f5f5;
`;

const Error = styled.p`
  color: red;
`;

const ButtonWinner = styled.button`
  border: 0;
  outline: none;
  background-color: #424242;
`;

const Account = () => {
  const [stateContract, setStateContract] = useState({
    account: "",
    manager: "",
    players: [],
    balance: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const balanceEther = useMemo(
    () => toEther(stateContract.balance),
    [stateContract.balance]
  );

  const handleRequestAccess = async () => {
    try {
      const currentAccount = await requestAccess();

      const lottery = getContract(abi, ADDRESS_ACCOUNT);

      const currentManager = await lottery.methods.manager().call();
      const currentPlayers = await lottery.methods.getPlayers().call();
      const currentBalance = await getBalance(lottery.options.address);

      setStateContract({
        account: currentAccount,
        manager: currentManager,
        players: currentPlayers,
        balance: currentBalance,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (value) => {
    try {
      const currentAccount = await requestAccess();
      const lottery = getContract(abi, ADDRESS_ACCOUNT);
      setLoading(true);
      setError(null);
      await lottery.methods.enter().send({
        from: currentAccount,
        value: toWei(value),
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Error enter the game...");
    }
  };

  const handlePickWinner = async () => {
    try {
      const currentAccount = await requestAccess();
      const lottery = getContract(abi, ADDRESS_ACCOUNT);
      setLoading(true);
      setError(null);
      await lottery.methods.pickWinner().send({
        from: currentAccount,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Error getting the winner");
    }
  };

  return (
    <>
      <Section>
        <Title>Account: {stateContract.account}</Title>
        <Title>Manager: {stateContract.manager}</Title>
        <Title>Balance: {balanceEther}</Title>
        <Title>Total Players: {stateContract.players.length}</Title>
        <Form onSubmit={handleSubmit} />
      </Section>
      <ActiveMetaMask onClick={handleRequestAccess} />
      {loading && <p>loading...</p>}
      {!loading && error && <Error>{error}</Error>}
      <ButtonWinner onClick={handlePickWinner}>Pick a winner</ButtonWinner>
    </>
  );
};

export default Account;
