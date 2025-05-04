import { useState } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import heartBag from "../pictures/blood-donation-heartbag.png";
import "../styles/Login.css";
import { TextField, Button, Typography, Box, Modal, Box as ModalBox } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "This field is required";
    }
    if (!formData.password) {
      newErrors.password = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const loginPayload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await axios.post(
        "http://localhost:8080/api/users/login/manual",
        loginPayload
      );
      alert("Login successful!");
      setOpenModal(true);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-form">
          <img src={heartBag} alt="Logo" className="login-logo" />
          <Typography variant="h5" fontWeight="bold" className="login-title">
            Welcome back
          </Typography>
          <Typography variant="body2" className="login-subtitle">
            Thank you for supporting life-saving efforts ❤️<br />
            Log in to your Blood Donation account below
          </Typography>

          <form onSubmit={handleLogin} className="login-fields">
            <TextField
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              placeholder="Email"
              error={!!errors.email} // Highlight field in red if there's an error
              helperText={errors.email} // Display error message below the field
            />
            <TextField
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              placeholder="Password"
              error={!!errors.password} // Highlight field in red if there's an error
              helperText={errors.password} // Display error message below the field
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              className="login-button"
              sx={{
                backgroundColor: "#6C63FF",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#5a54d6",
                },
              }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" className="signup-text">
            Don’t have an account?{" "}
            <Link to="/register" className="signup-link">
              Sign up for Free
            </Link>
          </Typography>
        </div>
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <ModalBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
          <Typography variant="h6" mt={2}>
            Login Successful!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default Login;