// pages/products/[id].tsx
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  const handleForm = (type: string) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div style={{
      backgroundColor: "#000",
      color: "#FFD700",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "2rem",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", textShadow: "0 0 10px #FFD700" }}>
        Product: {id?.toString().replace("-", " ").toUpperCase()}
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "2rem"
      }}>
        <img src="/1752394397401.jpg" style={imgStyle} />
        <img src="/1752394414330.jpg" style={imgStyle} />
        <img src="/1752394488943.jpg" style={imgStyle} />
      </div>

      <div style={{ textAlign: "center", margin: "2rem" }}>
        <button
          onClick={() => handleForm("order")}
          style={{ ...glowButton, backgroundColor: "#00FF99" }}
        >
          Order Now (Full Payment)
        </button>
        <button
          onClick={() => handleForm("preorder")}
          style={{ ...glowButton, backgroundColor: "#FF69B4", marginLeft: "1rem" }}
        >
          Pre-order Now (₹50)
        </button>
      </div>

      {showForm && (
        <div
          style={{
            backgroundColor: "#111",
            padding: "2rem",
            borderRadius: "10px",
            color: "#00FFFF",
            boxShadow: "0 0 20px #00FFFF",
            maxWidth: "600px",
            margin: "2rem auto"
          }}
        >
          <h2 style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#FFD700"
          }}>
            {formType === "order" ? "Order Form" : "Pre-order Form"}
          </h2>

          <form
            action="https://formsubmit.co/canwekissforever07@gmail.com"
            method="POST"
          >
            {/* Hidden values sent to FormSubmit */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="🛒 New Hostel Order Received" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="Order Type" value={formType === "order" ? "Order Now" : "Pre-order"} />
            <input type="hidden" name="Product Name" value={id?.toString().replace("-", " ").toUpperCase()} />

            <FormInput label="Full Name" name="Full Name" />
            <FormInput label="WhatsApp Number" name="WhatsApp Number" />
            <FormInput label="Email" name="Email" type="email" />
            <FormInput label="Preferred Delivery Date" name="Preferred Delivery Date" type="date" />

            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Preferred Time Slot</label>
              <select name="Preferred Time Slot" required style={inputStyle}>
                <option value="">Select</option>
                <option value="8AM-10AM">8AM - 10AM</option>
                <option value="10AM-12PM">10AM - 12PM</option>
                <option value="12PM-2PM">12PM - 2PM</option>
                <option value="2PM-4PM">2PM - 4PM</option>
                <option value="4PM-6PM">4PM - 6PM</option>
              </select>
            </div>

            <button type="submit" style={submitButton}>
              Proceed to Payment 💳
            </button>
          </form>
        </div>
      )}

      {/* ✅ FAQs Section */}
      <div style={{
        backgroundColor: "#111",
        padding: "2rem",
        marginTop: "4rem",
        borderRadius: "10px",
        boxShadow: "0 0 15px #00ffcc"
      }}>
        <h2 style={{
          fontSize: "2rem",
          color: "#00FFCC",
          textAlign: "center",
          marginBottom: "1.5rem",
          textShadow: "0 0 10px #00FFCC"
        }}>
          FAQs (Frequently Asked Questions)
        </h2>

        <ol style={{ lineHeight: "1.9", fontSize: "1.1rem", padding: "1rem" }}>
          {faqList.map((faq, index) => (
            <li key={index} style={{ marginBottom: "1.2rem" }}>
              <span style={{ color: "#FF69B4", fontWeight: "bold" }}>
                {index + 1}. {faq.q}
              </span>
              <br />
              <span style={{ color: "#CCCCCC" }}>{faq.a}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// FAQ Content
const faqList = [
  {
    q: "What is included in the mattress and pillow combo?",
    a: "The combo includes one standard-size mattress and one soft microfiber pillow. There's also a combo of mattress + pillow + bucket + mug."
  },
  {
    q: "Are these items suitable for IIT BHU hostel beds?",
    a: "Yes, the mattress sizes are specifically chosen to match the typical hostel cot dimensions at IIT BHU."
  },
  {
    q: "Can I choose my delivery date?",
    a: "Absolutely! You can select a convenient delivery date in July or August based on your arrival."
  },
  {
    q: "What is the ₹50 pre-order for?",
    a: "It confirms your interest and helps coordinate inventory. It will be adjusted during final payment."
  },
  {
    q: "Can I cancel my pre-order?",
    a: "Yes, within 3 days — but there will be no refund of the ₹50."
  },
  {
    q: "Is there a delivery charge?",
    a: "No. Delivery to your hostel gate is absolutely free."
  },
  {
    q: "When do I pay the remaining amount (if pre-ordered)?",
    a: "At the time of delivery or via UPI/QR after confirmation."
  },
  {
    q: "What if I’m not at the hostel when it’s delivered?",
    a: "We'll contact you before delivery. You can assign a friend to receive it."
  },
  {
    q: "Who is behind this initiative?",
    a: "We are 2nd-year students of IIT BHU helping juniors avoid overpriced local sellers."
  },
  {
    q: "Can I contact someone if I have more questions?",
    a: "Yes! Arka: 7439054257, Arya: 8436370112, Gourab: 6296764731, Aritra: 7001104034"
  }
];

// Subcomponent
function FormInput({ label, name, type = "text" }: { label: string, name: string, type?: string }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={labelStyle}>{label}</label>
      <input type={type} name={name} required style={inputStyle} />
    </div>
  );
}

// Styles
const glowButton: React.CSSProperties = {
  padding: "0.8rem 1.5rem",
  fontSize: "1.1rem",
  borderRadius: "8px",
  color: "#000",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 15px #FFF",
  transition: "0.3s ease",
  border: "none"
};

const submitButton: React.CSSProperties = {
  backgroundColor: "#FFD700",
  color: "#000",
  padding: "0.8rem",
  fontSize: "1.1rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  boxShadow: "0 0 10px #FFD700",
  marginTop: "1rem",
  width: "100%"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #444",
  backgroundColor: "#222",
  color: "#FFD700",
  outline: "none"
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.5rem",
  color: "#00FF99",
  fontWeight: "bold"
};

const imgStyle: React.CSSProperties = {
  width: "200px",
  borderRadius: "10px",
  boxShadow: "0 0 10px #FFD700"
};






