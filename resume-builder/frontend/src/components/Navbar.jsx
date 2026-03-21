import React, { useState, useEffect } from "react";
import "./navbar.css";

export function Navbar() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userFromUrl = params.get("user");
    if (userFromUrl) {
      setUserName(userFromUrl);
      localStorage.setItem("rn_user", userFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const stored = localStorage.getItem("rn_user");
      if (stored) setUserName(stored);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("rn_user");
    window.location.href = "http://localhost:5000/";
  };

  return (
    <nav className="rn-nav">
      <a href="http://localhost:5000/" className="rn-nav-logo">
        <img 
          src="data:image/png;base64,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" 
          className="rn-logo-img" 
          alt="RoleNavigator Logo" 
        />
        <span className="rn-logo-text">RoleNavigator</span>
      </a>
      <ul className="rn-nav-menu">
        <li><a href="http://localhost:5000/#hero">Home</a></li>
        <li className="rn-nav-dropdown">
          <a href="#">Modules</a>
          <ul className="rn-dropdown-menu">
            <li><a href="http://localhost:5001/">Resume Analyzer</a></li>
            <li><a href="http://localhost:5004/">Resume Builder</a></li>
            <li><a href="http://localhost:5002/">Interview Q Prediction</a></li>
          </ul>
        </li>
        <li><a href="http://localhost:5000/#features">Features</a></li>
      </ul>
      <div className="rn-nav-actions">
        {userName ? (
          <div className="rn-profile-wrap">
            <div className="rn-profile-icon"><span style={{ fontSize:'15px',fontWeight:800,color:'#2563eb',lineHeight:1 }}>{userName.charAt(0).toUpperCase()}</span></div>
            <ul className="rn-profile-dropdown">
              <li style={{ padding:'10px 14px 2px',fontSize:'13px',fontWeight:700,color:'#64748b' }}>Signed in as {userName}</li>
              <div className="rn-p-divider"></div>
              <li><a href="http://localhost:5000/#modules">📊 &nbsp;My Dashboard</a></li>
              <div className="rn-p-divider"></div>
              <li className="rn-logout"><a href="#" onClick={handleLogout}>🚪 &nbsp;Log Out</a></li>
            </ul>
          </div>
        ) : (
          <>
            <a href="http://localhost:5000/" className="rn-btn-ghost" style={{textDecoration: 'none'}}>Login</a>
            <a href="http://localhost:5000/" className="rn-btn-primary" style={{textDecoration: 'none'}}>Sign Up →</a>
          </>
        )}
      </div>
    </nav>
  );
}
