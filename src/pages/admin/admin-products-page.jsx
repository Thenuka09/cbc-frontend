import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  // product list state
  const [products, setProducts] = useState([])

  useEffect(() => {
    // get product details
    async function getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Faild to fetch projects", error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="pt-8 px-6">
      
      <div className="flex justify-between items-center w-full mb-10">
        <h1 className="text-3xl font-semibold text-black">
          Products Details
        </h1>

        {/* Add product button */}
        <div className="">
          <Link to={"/admin/products/add-products"} className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg cursor-pointer text-white text-[16px] font-medium"> <BsCartPlus className="mr-2 font-semibold" /> Add Product</Link>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold truncate" >Product Id</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold truncate">Product Name</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold truncate">Price</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold truncate">Last Price</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold truncate">Stocks</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold truncate">Description</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold truncate">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3 text-[14px]">{product.productId}</td>
                <td className="px-4 py-3 font-medium text-gray-800 text-[14px]">
                  {product.productName}
                </td>
                <td className="px-4 py-3 text-center text-green-600 font-semibold text-[14px] truncate">
                  Rs. {product.price}
                </td>
                <td className="px-4 py-3 text-center line-through text-red-500 text-[14px] truncate">
                  Rs. {product.lastPrice}
                </td>
                <td
                  className={`px-4 py-3 text-center font-semibold text-[14px] truncate ${product.stock > 50 ? "text-green-600" : "text-yellow-600"
                    }`}
                >
                  {product.stock}
                </td>
                <td className="px-4 py-3 text-gray-600 text-[14px] max-w-[300px] truncate" title={product.description}>{product.description}</td>
                <td className="px-4 py-3 text-[18px]">
                  <div className="flex space-x-2">
                    <button className="cursor-pointer p-2 bg-gray-200 rounded-2xl text-red-700 hover:bg-red-300 hover:text-black"><MdDeleteForever /></button>
                    <button className="cursor-pointer p-2 bg-gray-200 rounded-2xl text-blue-700  hover:bg-blue-300 hover:text-black"><FaEdit /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
