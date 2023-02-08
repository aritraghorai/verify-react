import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import RegistrationForm from "./Component/RegistrationForm";
import { useEffect, useState } from "react";
import LoginForm from "./Component/LoginForm";
import getCookie from "./utils/Functions/getCookie";
import DumpData from "./Component/DumpData";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const varify = getCookie("verified");
    if (varify === 1) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="App container">
      {isLogin ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/dump" element={<DumpData />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginForm setIsLogin={setIsLogin} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
