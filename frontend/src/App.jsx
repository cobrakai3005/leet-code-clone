import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Topbar from "./component/Topbar";

export default function App() {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        <Topbar />
        <Outlet />
        <Toaster
          toastOptions={{
            success: {
              theme: {
                primary: "#231942",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
