import Web3 from "web3";

let web3;

async function requestAccess() {
  try {
    const [firstAccount] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    web3 = new Web3(window.ethereum);
    return firstAccount;
  } catch (err) {
    throw new Error("Error to active metamask");
  }
}

async function getBalance(address) {
  try {
    const currentBalance = await getInstance().eth.getBalance(address);
    return currentBalance;
  } catch (err) {
    throw new Error(
      `Error to retrieve the balance for this address ${address}`
    );
  }
}

function toEther(current) {
  return getInstance()?.utils.fromWei(current, "ether");
}

function toWei(current) {
  return getInstance()?.utils.toWei(current, "ether");
}

function getInstance() {
  return web3 || null;
}

export { requestAccess, getBalance, toEther, toWei, getInstance };
