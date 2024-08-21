"use client";
import { useSendEmail } from "./hooks/useSendEmail";
import SendEmailForm from "./ui/SendEmailForm";
import SuccessSend from "./ui/SuccessSend";
const SendEmail = () => {
  const { successSend } = useSendEmail();
  return (
    <div className="pt-14">
      {successSend ? <SuccessSend /> : <SendEmailForm />}
    </div>
  );
};

export default SendEmail;
