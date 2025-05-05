import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Typography, Box, Avatar, Button } from "@mui/material";
import axios from "axios";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch user data when the component loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/profile");
        setFormData(response.data); // Populate form with user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handlePasswordChange = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.put("http://localhost:8080/api/users/update-password", {
        password,
      });
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password.");
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put("http://localhost:8080/api/users/update-profile", formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Personal Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Avatar
          alt="User Avatar"
          src="/path/to/avatar.jpg"
          sx={{ width: 80, height: 80 }}
        />
      </Box>
      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* First Name */}
        <TextField
          label="First Name"
          variant="outlined"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          fullWidth
        />
        {/* Last Name */}
        <TextField
          label="Last Name"
          variant="outlined"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          fullWidth
        />
        {/* Email Address */}
        <TextField
          label="Email Address"
          variant="outlined"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          fullWidth
        />
        {/* Contact Number */}
        <TextField
          label="Contact Number"
          variant="outlined"
          value={formData.contactNumber}
          onChange={(e) => handleChange("contactNumber", e.target.value)}
          fullWidth
        />
        {/* Address */}
        <TextField
          label="Address"
          variant="outlined"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          fullWidth
        />
      </Box>

      {/* Password Update */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Change Password
        </Typography>
        <TextField
          label="New Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePasswordChange}
          sx={{ marginTop: "10px" }}
        >
          Update Password
        </Button>
      </Box>

      {/* Save Changes Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        sx={{ marginTop: "20px" }}
        fullWidth
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default UserProfile;