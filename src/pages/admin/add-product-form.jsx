import { useState } from "react";
import { MdAddTask } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

export default function AddProductForm() {

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageURLs, setImageURLs] = useState("");
    const [price, setPrice] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const [stocks, setStocks] = useState(0);
    const [description, setDescription] = useState("");

    return (
        <div className="w-full flex justify-center items-center min-h-screen pt-8 pb-8 bg-gray-50">
            <div className="flex flex-col w-[600px] h-auto bg-white rounded-[12px] shadow-lg p-6">
                <h1 className="text-center w-full mt-2 mb-4 text-[24px] font-semibold flex justify-center items-center"><FaWpforms className="mr-4" /> Add Product Form</h1>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Product ID</label>
                        <input
                            type="text"
                            placeholder="enter product id"
                            value={productId}
                            onChange={(e) => { setProductId(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Product Name</label>
                        <input
                            type="text"
                            placeholder="enter product name"
                            value={productName}
                            onChange={(e) => { setProductName(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Alternative Name</label>
                        <input
                            type="text"
                            placeholder="enter alternative names"
                            value={alternativeNames}
                            onChange={(e) => { setAlternativeNames(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Images URL's</label>
                        <input
                            type="text"
                            placeholder="enter image urls"
                            value={imageURLs}
                            onChange={(e) => { setImageURLs(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Price</label>
                        <input
                            type="number"
                            placeholder="enter product price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Last Price</label>
                        <input
                            type="number"
                            placeholder="enter product last price"
                            value={lastPrice}
                            onChange={(e) => { setLastPrice(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Stocks</label>
                        <input
                            type="number"
                            placeholder="enter amount of stocks"
                            value={stocks}
                            onChange={(e) => { setStocks(e.target.value) }}
                            className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Description</label>
                        <textarea
                            type="number"
                            placeholder="description ..."
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            className="h-[80px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"
                        />
                    </div>
                    <div className="flex">
                        <button className="bg-green-400 w-full py-2 cursor-pointer rounded-[6px] flex items-center justify-center text-[18px] hover:bg-green-500"> <MdAddTask className="mr-2" /> Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}