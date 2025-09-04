import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import { LogoutLink } from "@kinde-oss/kinde-auth-react/components";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, logout } = useKindeAuth();
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-6xl">
          {user?.givenName} {user?.familyName}
        </h4>
        <h4 className="text-md text-zinc-400">{user?.email}</h4>
      </div>
      <button
        onClick={() => {
          localStorage.clear(); // clear Kinde cache
          sessionStorage.clear();
          toast.success("Logged Out Successfully");
          window.location.href = import.meta.env.VITE_KINDE_LOGOUT_URL; // force redirect home
        }}
        className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-800/50"
      >
        Logout
      </button>
    </div>
  );
}
