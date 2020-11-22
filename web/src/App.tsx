import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import Routes from "./routes/index";

import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
