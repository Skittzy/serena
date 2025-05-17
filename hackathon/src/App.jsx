import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import LoginModal from "./LoginModel";
import CameraView from "./CameraView"; // ✅ Add this

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCamera, setShowCamera] = useState(false); // ✅ For camera

  return (
    <>
      <div className="app">
        <Sidebar
          onLoginClick={() => setShowLogin(true)}
          onCameraClick={() => setShowCamera(true)} // ✅ Pass prop
        />
        <MainContent />
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showCamera && <CameraView onClose={() => setShowCamera(false)} />} {/* ✅ Show camera */}
    </>
  );
}
