import { useEffect, useState } from "react";

// hook to check if the MetaMask plugin is installed
const useIsMetaMaskInstalled = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsEnabled(true);
    }
  }, [isEnabled]);

  return isEnabled;
};

export default useIsMetaMaskInstalled;
