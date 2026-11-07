"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // load the logged-in user from the API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // full reload clears the cached Dashboard page
  };

  if (!user) {
    return <p className="loading">Loading...</p>;
  }

  // first letters of the name, e.g. "Phone Myint" -> "PM"
  const initials = (user.fullname || "?")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="auth-box">
      <div className="avatar">{initials}</div>
      <h1>Welcome, {user.fullname}</h1>
      <p>You are logged in to the members area.</p>

      <div className="info">
        <div>
          <span>Name</span>
          <span>{user.fullname}</span>
        </div>
        <div>
          <span>Email</span>
          <span>{user.email}</span>
        </div>
      </div>

      <button type="button" className="outline" onClick={handleLogout} style={{ width: "100%" }}>
        Log out
      </button>
    </div>
  );
}
