import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"; 
import backgroundImg from "./images/bg.jpeg"; 
import "./App.css"; 

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;