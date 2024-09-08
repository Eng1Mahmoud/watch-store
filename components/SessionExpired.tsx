"use client";
import { useTokenExpiration } from "@/hooks/useTokenExpiration";
const SessionExpired = () => {
  useTokenExpiration();
  return null;
};

export default SessionExpired;
