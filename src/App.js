import "./App.css";
import { EnrollmentForm } from "./components/EnrollmentForm";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import React, { useState, useEffect, createContext } from "react";
import ShowMessage from "./components/ShowMessage";
import Query from "./components/Query";
const authenticate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const handleIsLogin = () => {
    setLogin(!login);
  };

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("login")));
  }, [login]);

  return (
    <>
      <authenticate.Provider value={[handleIsLogin]}>
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Home />} />
            {login && (
              <Route
                path="/EnrollmentForm"
                exact
                element={<EnrollmentForm />}
              />
            )}
            {login && (
              <Route path="/ShowMessage" exact element={<ShowMessage />} />
            )}
            {login && <Route path="/Query" exact element={<Query />} />}
            <Route path="*" exact element={<PageNotFound />} />
          </Routes>
        </div>
      </authenticate.Provider>
    </>
  );
}

export default App;
export { authenticate };
