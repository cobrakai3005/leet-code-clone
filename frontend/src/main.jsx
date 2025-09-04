import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Editor from "./pages/Editor.jsx";
import Problem from "./pages/Problem.jsx";
import Problems from "./pages/Problems.jsx";
import Account from "./pages/Account.jsx";
import About from "./pages/About.jsx";
import Submission from "./pages/Submission.jsx";
import Protect from "./pages/Protect.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="editor" element={<Editor />} />
      <Route path="about" element={<About />} />
      <Route path="problems" element={<Problems />} />
      <Route
        path="account"
        element={
          <Protect>
            <Account />
          </Protect>
        }
      />
      <Route path="submission/:slug" element={<Submission />} />
      <Route path="/problems/:problem" element={<Problem />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
    redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
  >
    <RouterProvider router={router} />
  </KindeProvider>
);
