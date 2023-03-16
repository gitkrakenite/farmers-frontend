import React from "react";
import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FarmerAuth from "./screens/farmerAuth/FarmerAuth";
import FriendAuth from "./screens/friendAuth/FriendAuth";
import Landing from "./screens/landing/Landing";
import "./App.css";
import Info from "./screens/info/Info";
import Shop from "./screens/shop/Shop";
import Invest from "./screens/invest/Invest";
import Profile from "./screens/profile/Profile";
import Singleproduct from "./screens/singleProduct/Singleproduct";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/fauth" element={<FarmerAuth />} />
          <Route path="/uauth" element={<FriendAuth />} />
          <Route path="/info" element={<Info />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/product/:id" element={<Singleproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
