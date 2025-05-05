import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Register.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Sign up</h2>
        <p className="mb-6 text-gray-600">
          Enter your details below to create your account and get started.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded px-4 py-2"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded px-4 py-2"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          {/* Email */}
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border border-gray-300 rounded px-4 py-2 col-span-1 md:col-span-2"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {/* Contact Number */}
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-gray-300 rounded px-4 py-2 col-span-1 md:col-span-2"
            value={formData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
          />
          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 rounded px-4 py-2 col-span-1 md:col-span-2"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 col-span-1 md:col-span-2"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Confirm
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;