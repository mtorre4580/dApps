import { getInstance } from "./web3";

let contract = null;

function getContract(abi, address) {
  if (!getInstance()) return null;
  if (contract == null) {
    const web3 = getInstance().eth;
    contract = new web3.Contract(abi, address);
  }
  return contract;
}

export { getContract };
