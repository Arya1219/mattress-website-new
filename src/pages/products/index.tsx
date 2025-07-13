import Link from "next/link";

export default function ProductsPage() {
  const products = [
    // Mattresses
    { id: "mattress-1", name: "Single Mattress 1", category: "Mattress" },
    { id: "mattress-2", name: "Single Mattress 2", category: "Mattress" },
    { id: "mattress-3", name: "Single Mattress 3", category: "Mattress" },
    { id: "mattress-4", name: "Single Mattress 4", category: "Mattress" },
    { id: "mattress-5", name: "Single Mattress 5", category: "Mattress" },

    // Combos
    { id: "combo-1", name: "Mattress + Pillow Combo 1", category: "Combo" },
    { id: "combo-2", name: "Mattress + Pillow Combo 2", category: "Combo" },
    { id: "combo-3", name: "Mattress + Pillow Combo 3", category: "Combo" },
    { id: "combo-4", name: "Mattress + Pillow Combo 4", category: "Combo" },
    { id: "combo-5", name: "Mattress + Pillow Combo 5", category: "Combo" },

    // Full Combos
    { id: "full-1", name: "Mattress + Pillow + Bucket + Mug 1", category: "Full Combo" },
    { id: "full-2", name: "Mattress + Pillow + Bucket + Mug 2", category: "Full Combo" },
    { id: "full-3", name: "Mattress + Pillow + Bucket + Mug 3", category: "Full Combo" },
    { id: "full-4", name: "Mattress + Pillow + Bucket + Mug 4", category: "Full Combo" },
    { id: "full-5", name: "Mattress + Pillow + Bucket + Mug 5", category: "Full Combo" },
  ];

  const categories = ["Mattress", "Combo", "Full Combo"];

  const getCoverImage = (category: string) => {
    if (category === "Mattress") return "/1752394397401.jpg";
    if (category === "Combo") return "/1752394414330.jpg";
    if (category === "Full Combo") return "/1752394488943.jpg";
    return "/default.jpg";
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#FFD700",
        padding: "2rem",
        fontFamily: "'Orbitron', sans-serif",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          letterSpacing: "2px",
          color: "#00FF88",
          textShadow: "0 0 20px #00FF88",
        }}
      >
        Explore Our Products
      </h1>

      {categories.map((cat) => (
        <div key={cat}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#00FF88",
              textShadow: "0 0 10px #00FF88",
              borderBottom: "2px solid #00FF88",
              display: "inline-block",
              paddingBottom: "6px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#111",
              borderRadius: "10px",
            }}
          >
            {cat}
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "#1A1A1A",
                      padding: "1rem",
                      borderRadius: "15px",
                      width: "230px",
                      color: "#fff",
                      textAlign: "center",
                      boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(0, 255, 136, 0.8)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(0, 255, 136, 0.3)";
                    }}
                  >
                    <img
                      src={getCoverImage(cat)}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "10px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        color: "#FFD700",
                        fontWeight: "bold",
                      }}
                    >
                      {product.name}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "#00FF88" }}>
                      ₹ [Add Later]
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
