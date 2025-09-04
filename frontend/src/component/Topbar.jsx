import React from "react";
import { Link } from "react-router-dom";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-react/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
export default function Topbar() {
  return (
    <div className="flex justify-center ">
      <div className=" w-full  min-h-36 mx-auto  p-7 bg-gradient-to-br from-violet-700  v to-zinc-900 rounded-tl-[200px]  rounded-tr-[200px]">
        {/* <img src="/logo.jpg" alt="" className="max-w-56" /> */}
        <div className="flex justify-center gap-2">
          <h1 className="text-[77px] text-sky-200">CODE  -</h1>
          <h1 className="text-[77px] text-sky-200">ARENA JS</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

const topbarItems = [
  {
    title: "About",
    route: "/about",
  },

  {
    title: "Problems",
    route: "/problems",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
  {
    title: "Account",
    route: "/account",
  },
  {
    title: "Login",
    route: "/login",
  },
];
function Navbar() {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  return (
    <div className="flex gap-7 justify-around items-center mt-4">
      {topbarItems
        .filter((el) => {
          // Show Login only if not authenticated
          if (el.route === "/login") return !isAuthenticated;
          // Show Account only if authenticated
          if (el.route === "/account") return isAuthenticated;
          // Show all other links
          return true;
        })
        .map((el) => (
          <NavbarItem key={el.title} route={el.route} title={el.title} />
        ))}
    </div>
  );
}

function NavbarItem({ route, title }) {
  if (route === "/login") {
    return <LoginLink>Login</LoginLink>;
  }
  return (
    <Link
      to={route}
      className="text-slate-400 hover:text-white text-lg  cursor-pointer"
    >
      {title}
    </Link>
  );
}
