import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

import { auth } from "./firebase";

import "./App.css";
function App(){
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return(
    <div className="App">
      <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home name={userName}/>} />
      </Routes>


      </Router>
    </div>
  )
}

export default App;