import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// import { createContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import DashboardAdminPage from "./pages/DashboardAdminPage/DashboardAdminPage";
import DashboardPlayerPage from "./pages/DashboardPlayerPage/DashboardPlayerPage";
import DashboardManagerPage from "./pages/DashboardManagerPage/DashboardManagerPage";

// interface AuthContextInfo {
//   userInfo?: UserResponse;
//   userToken?: string;
//   login?: (userToken: string, userInfo: UserResponse) => void;
//   logout?: () => void;
// }
// export const AuthContext = createContext<AuthContextInfo>({});

function App(): JSX.Element {
  //  const [userToken, setUserToken] = useState<string | undefined>();
  //  const [userInfo, setUserInfo] = useState<UserResponse | undefined>();
  //
  //  const login = (userTokenFromApi: string, userInfoFromApi: UserResponse): void => {
  //    setUserToken(userTokenFromApi);
  //    setUserInfo(userInfoFromApi);
  //  }
  //
  //  const logout = (): void => {
  //    setUserToken(undefined);
  //    setUserInfo(undefined);
  //  }
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="/dashboard-player" element={<DashboardPlayerPage></DashboardPlayerPage>}></Route>
          <Route path="/dashboard-manager" element={<DashboardManagerPage></DashboardManagerPage>}></Route>
          <Route path="/dashboard-admin" element={<DashboardAdminPage></DashboardAdminPage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;