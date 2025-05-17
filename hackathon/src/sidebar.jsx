import React from "react";

export default function Sidebar({ onLoginClick, onCameraClick }) { // ✅ Include prop
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Girl Logo" className="logo-img" />
        <h1 className="logo-text">Serena</h1>
      </div>
      <div className="sidebar-actions">
        <button onClick={onCameraClick}>📷 Open Camera</button> {/* ✅ This button triggers it */}
        <button>🗑️ Clear conversations</button>
        <button>👤 My account</button>
        <button onClick={onLoginClick}>🔐 Log In</button>
      </div>
    </aside>
  );
}
