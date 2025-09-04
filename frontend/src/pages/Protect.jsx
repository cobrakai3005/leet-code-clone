import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export default function Protect({ children }) {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    toast.error("Please Login ");
    return <Navigate to={"/"} />;
  }
  return <div>{children}</div>;
}
