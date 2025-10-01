import { useParams } from "react-router-dom";
import NavBar from "../../components/nav-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "./not-found";
import ImageSlider from "../../components/image-slider";

export default function ProductOverview() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("Loading"); // Not-found, Found

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

      {status == "Loading" && (
        <div className="w-full flex items-center justify-center h-[calc(100vh-88px)]">
          <div className="w-16 h-16 border-2 border-b-gray-300 animate-spin border-blue-600 rounded-full "></div>
        </div>
      )}

      {status == "Not-found" && (
        <div>
          <NotFound />
        </div>
      )}

      {status == "Found" && (
        <div className="flex m-2">
          <div className="w-[35%] h-full">
            <ImageSlider images={product.images}/>
            {/* <img src={product.images[0]} alt="product images" className="rounded-lg h-72 w-full object-cover"/> */}
          </div>
          <div className="w-[65%] h-full flex flex-col ml-2">
            <span>Product Name : {product.productName}</span>
            <span>Price: {product.price}</span>
            <span>Last Price: {product.lastPrice}</span>
            <span>
              {product.lastPrice > product.price && (
                <span className="text-red-500 line-through mr-3">
                  LKR. {product.lastPrice}
                </span>
              )}
              LKR. {product.price}
            </span>
            <span>Description: {product.description}</span>
            <div>
              <span>Alt Names: {product.altNames.join(" | ")}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
