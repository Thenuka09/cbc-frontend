import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProductsPage() {
  // product list state
  const [products, setProducts] = useState([
    {
      _id: "6875e237bb99397ae8c73914",
      productId: "CR001",
      productName: "GlowSkin Hydrating Day Cream",
      altNames: ["HydraGlow Cream", "Day Repair Cream", "Glow Cream"],
      images: [
        "https://example.com/images/glowskin_day_front.jpg",
        "https://example.com/images/glowskin_day_side.jpg",
      ],
      price: 1499,
      lastPrice: 1699,
      description:
        "GlowSkin Hydrating Day Cream is enriched with hyaluronic acid and vitamin E, providing long-lasting hydration and protecting the skin throughout the day.",
      stock: 100,
    },
    {
      _id: "6875e237bb99397ae8c73915",
      productId: "CR002",
      productName: "LumiNight Repair Serum",
      altNames: ["Night Glow Serum", "Skin Renewal Serum", "Overnight Repair"],
      images: [
        "https://example.com/images/luminight_front.jpg",
        "https://example.com/images/luminight_side.jpg",
      ],
      price: 2499,
      lastPrice: 2799,
      description:
        "LumiNight Repair Serum helps repair damaged skin overnight with retinol and peptides, reducing fine lines and promoting a youthful glow.",
      stock: 80,
    },
    {
      _id: "6875e237bb99397ae8c73916",
      productId: "CR003",
      productName: "AquaFresh Cleansing Gel",
      altNames: ["Deep Clean Gel", "Refreshing Face Wash", "HydraClean Gel"],
      images: [
        "https://example.com/images/aquafresh_front.jpg",
        "https://example.com/images/aquafresh_side.jpg",
      ],
      price: 999,
      lastPrice: 1199,
      description:
        "AquaFresh Cleansing Gel removes dirt, oil, and impurities while maintaining the skin’s natural moisture balance for a refreshed feel.",
      stock: 150,
    },
    {
      _id: "6875e237bb99397ae8c73917",
      productId: "CR004",
      productName: "SunShield SPF 50+",
      altNames: ["UV Defense Lotion", "Daily Sunscreen", "SPF Shield"],
      images: [
        "https://example.com/images/sunshield_front.jpg",
        "https://example.com/images/sunshield_side.jpg",
      ],
      price: 1799,
      lastPrice: 1999,
      description:
        "SunShield SPF 50+ provides broad-spectrum sun protection with a lightweight, non-greasy formula suitable for all skin types.",
      stock: 120,
    },
  ]);

  useEffect(() => {
    // get product details
    async function getProducts() {
        try {
            const response = await axios.get("http://localhost:5000/api/product");
            console.log("Response", response);
            setProducts(response.data);
        } catch (error) {
            console.error("Faild to fetch projects", error);
        }
    }
    getProducts();
  }, []);

  return (
    <div className="pt-4">
      <h1 className="text-center text-2xl">Admin Products Page</h1>

      {products.map((product, index) => {
        return (
          <div key={index}>
            {index}
            {product.productName}
          </div>
        );
      })}
    </div>
  );
}
