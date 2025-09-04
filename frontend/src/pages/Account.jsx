import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-react/components";
import React from "react";
import Profile from "../component/Profile";
import AllSubmissions from "../component/AllSubmissions";

export default function Account() {
  const { user, isAuthenticated, isLoading } = useKindeAuth();

  return (
    <div className="p-5 space-y-1">
      <Profile />
      <div className="grid grid-cols-[1fr_300px]">
        <AllSubmissions />
        <div>Over view</div>
      </div>
    </div>
  );
}
