import React, { useState, useEffect } from "react";
import "./navbar.css";

/* ── tiny logo (same data‑URI used on Home Page) ── */
const LOGO_SRC =
  "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/wAARCABAAEADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EAC4QAAIBAwMCBAUFAAAAAAAAAAABAgMEERIhMUFRBRNhcZGhscHR8BQiI0L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAiH/2gAMAwEAAhEDEQA/APrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHlS6kqUXKTwjnq6mE6mISblHO2Mc+cAbK1WNKLlJ4SIPVeZW3qhJ6q75z6L6Ht7To0LbV2TlGUXHBJZVWFqU1GTazz5MZfL6+QB0UbuFR4i8vsc9PUxqWqjHDe5r0aNOFOMVFJJckG1yqRXmTsUv5ELTaiqQi4vfBYOKlSpU6Esxi3PGW8fXB0pZkByvVVtb6OWW29R6zc3Ljy854+j1c5R1RoKKltl2rPZmhPy9PkRtH42jVpQ11dMJ5kpxcc+MNmvVpRqpqUVJPwwB5i4ySa5T5R5NzU7MmXFN78I1uWGub9UB3KrCMHL+KPKAAAAAAAAAAAAAAAAABjXWpbwTfmRHq3RmtMY4b4Q1wAAAADHXRbTbOSrCcNXOUcY+jH9AAAAAAAAAAAAAAAAAAAIsAAAAAP/Z";

/**
 * Helper — generates a URL to another module, carrying the current username.
 * If the user is not logged in the URL won't carry the `?user=` param.
 */
function moduleUrl(base, userName) {
  return userName
    ? `${base}?user=${encodeURIComponent(userName)}`
    : base;
}

export function Navbar() {
  const [userName, setUserName] = useState(null);
  const [dropOpen, setDropOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    // 1) Check URL param (passed from another module / home page)
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("user");
    if (fromUrl) {
      setUserName(fromUrl);
      localStorage.setItem("rn_user", fromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      // 2) Fall back to same‑origin localStorage (e.g. after refresh)
      const stored = localStorage.getItem("rn_user");
      if (stored) setUserName(stored);
    }

    // Close dropdowns when clicking outside
    const close = () => { setDropOpen(false); setProfileOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("rn_user");
    window.location.href = "http://localhost:5000/";
  };

  const stopProp = (e) => e.stopPropagation();

  return (
    <nav className="rn-nav">
      {/* Logo */}
      <a href="http://localhost:5000/" className="rn-nav-logo">
        <img src={LOGO_SRC} className="rn-logo-img" alt="RoleNavigator Logo" />
        <span className="rn-logo-text">RoleNavigator</span>
      </a>

      {/* Menu */}
      <ul className="rn-nav-menu">
        <li><a href="http://localhost:5000/#hero">Home</a></li>

        {/* Modules dropdown */}
        <li
          className="rn-nav-dropdown"
          onClick={(e) => { stopProp(e); setDropOpen((o) => !o); }}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>Modules</a>
          <ul className={`rn-dropdown-menu${dropOpen ? " rn-open" : ""}`}>
            <li><a href={moduleUrl("http://localhost:5001/", userName)}>Resume Analyzer</a></li>
            <li><a href={moduleUrl("http://localhost:5004/", userName)}>Resume Builder</a></li>
            <li><a href={moduleUrl("http://localhost:5002/", userName)}>Interview Q Prediction</a></li>
          </ul>
        </li>

        <li><a href="http://localhost:5000/#features">Features</a></li>
      </ul>

      {/* Actions */}
      <div className="rn-nav-actions">
        {userName ? (
          <div
            className="rn-profile-wrap"
            onClick={(e) => { stopProp(e); setProfileOpen((o) => !o); }}
          >
            <div className="rn-profile-icon">
              <span style={{ fontSize: "15px", fontWeight: 800, color: "#2563eb", lineHeight: 1 }}>
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <ul className={`rn-profile-dropdown${profileOpen ? " rn-open" : ""}`}>
              <li style={{ padding: "10px 14px 2px", fontSize: "13px", fontWeight: 700, color: "#64748b" }}>
                Signed in as {userName}
              </li>
              <div className="rn-p-divider" />
              <li><a href="http://localhost:5000/#modules">📊&nbsp; My Dashboard</a></li>
              <div className="rn-p-divider" />
              <li className="rn-logout"><a href="#" onClick={handleLogout}>🚪&nbsp; Log Out</a></li>
            </ul>
          </div>
        ) : (
          <>
            <a href="http://localhost:5000/" className="rn-btn-ghost">Login</a>
            <a href="http://localhost:5000/" className="rn-btn-primary">Sign Up →</a>
          </>
        )}
      </div>
    </nav>
  );
}
