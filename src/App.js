import React from "react";
import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FarmerAuth from "./screens/farmerAuth/FarmerAuth";
import FriendAuth from "./screens/friendAuth/FriendAuth";
import Landing from "./screens/landing/Landing";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/fauth" element={<FarmerAuth />} />
          <Route path="/uauth" element={<FriendAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
