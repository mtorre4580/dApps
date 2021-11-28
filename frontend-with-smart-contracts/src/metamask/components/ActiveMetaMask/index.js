import React from "react";
import styled from "styled-components";
import useIsMetaMaskInstalled from "../../hooks/useIsMetaMaskInstalled";
import logo from "./metamask.svg";

const Button = styled.button`
  padding: 20px;
  background-color: #43a047;
  color: #fff;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 3px #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover  {
    cursor: pointer;
  }
  position: absolute;
  top: 40px;
  right: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #1976d2;
  &:hover  {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const ActiveMetaMask = ({ onClick }) => {
  const isIstalled = useIsMetaMaskInstalled();

  if (isIstalled) {
    return (
      <Button onClick={onClick}>
        Enable Metamask
        <Img src={logo} alt="logo_metamask" />
      </Button>
    );
  }
    

  return (
    <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">
      You need to install the plugin to use this site
    </Link>
  );
};

export default ActiveMetaMask;
