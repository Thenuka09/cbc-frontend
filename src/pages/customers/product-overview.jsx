import { useParams } from "react-router-dom";
import NavBar from "../../components/nav-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NotFound from "./not-found";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("Loading") // Not-found, Found

  // fetch product details
  useEffect(() => {
    async function getProductById() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/product/${productId}`
        );

        if (response.data == null) {
          setStatus("Not-found");
        } else {
            setStatus("Found");
          setProduct(response.data);
        }
      } catch (error) {
        console.error("failed to get product, ", error);
      }
    }
    getProductById();
  }, []);

  return (
    <div>
      <NavBar />

      { status == "Loading" && (
        <div className="w-full flex items-center justify-center h-[calc(100vh-88px)]">
            <div className="w-16 h-16 border-2 border-b-gray-300 animate-spin border-blue-600 rounded-full "></div>
        </div>
      )}

      {status == "Not-found"&&(
        <div>
            <NotFound/>
        </div>
      )}
    </div>
  );
}
