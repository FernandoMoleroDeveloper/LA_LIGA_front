import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// import { createContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { createContext, useState } from "react";
import { ROL } from "./models/User";

interface AuthContextInfo {
  userRol?: ROL;
  userToken?: string;
  logIn?: (userToken: string, userRol: ROL) => void;
  logOut?: () => void;
}
export const AuthContext = createContext<AuthContextInfo>({});

function App(): JSX.Element {
  const [userToken, setUserToken] = useState<string | undefined>();
  const [userRol, setUserRol] = useState<ROL | undefined>();

  const logIn = (userTokenFromApi: string, userRolFromApi: ROL): void => {
    setUserToken(userTokenFromApi);
    setUserRol(userRolFromApi);
  }

  const logOut = (): void => {
    setUserToken(undefined);
    setUserRol(undefined);
  }
  return (
    <div className="app">
      <AuthContext.Provider value={{ userRol, userToken, logIn, logOut }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
          </Routes>
        </HashRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
