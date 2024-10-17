import { usePrepareAccountConfig } from "@/utils/prepareAccountConfig";
import { useEffect } from "react";
const EmailVerification = ({ token }: { token: string }) => {
  const { prepareAccountConfig } = usePrepareAccountConfig();

  useEffect(() => {
    if (token) {
      prepareAccountConfig(token); // Use the same function to handle token saving
    }
  }, [prepareAccountConfig, token]);

  return null;
};

export default EmailVerification;
