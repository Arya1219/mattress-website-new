// OrderForm.tsx
import React, { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ➤ You can now redirect to Razorpay or show QR code, etc.
    alert("Form submitted! Redirecting to payment...");
  };

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "#00FFCC",
        padding: "2rem",
        borderRadius: "10px",
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: "0 0 20px #00FFCC",
        maxWidth: "600px",
        margin: "2rem auto"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center", color: "#FFD700" }}>
        Book Your Hostel Kit 🛏️
      </h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="WhatsApp Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <select
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Preferred Time Slot</option>
          <option value="8AM-10AM">8AM - 10AM</option>
          <option value="10AM-12PM">10AM - 12PM</option>
          <option value="12PM-2PM">12PM - 2PM</option>
          <option value="2PM-4PM">2PM - 4PM</option>
          <option value="4PM-6PM">4PM - 6PM</option>
        </select>

        <button
          type="submit"
          style={{
            backgroundColor: "#FFD700",
            color: "#000",
            padding: "0.8rem",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 0 10px #FFD700",
            transition: "0.3s"
          }}
        >
          Proceed to Payment 💳
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #333",
  backgroundColor: "#222",
  color: "#FFD700",
  outline: "none",
};
