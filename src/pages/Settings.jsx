import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved!");
  };
  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  return (
    <div className="settings-page">
      <h2>Profile Settings</h2>
      <div className="profile-grid">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>

        <label className="full-width">
          Bio
          <textarea name="bio" value={profile.bio} onChange={handleChange} />
        </label>
      </div>
      <div className="settings-actions">
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
