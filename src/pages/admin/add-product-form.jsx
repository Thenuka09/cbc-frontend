import { MdAddTask } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

export default function AddProductForm() {
    return (
        <div className="w-full flex justify-center items-center min-h-screen pt-8 pb-8 bg-gray-50">
            <div className="flex flex-col w-[600px] h-auto bg-white rounded-[12px] shadow-lg p-6">
                <h1 className="text-center w-full mt-2 mb-4 text-[24px] font-semibold flex justify-center items-center"><FaWpforms className="mr-4"/> Add Product Form</h1>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Product ID</label>
                        <input type="text" placeholder="enter product id" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Product Name</label>
                        <input type="text" placeholder="enter product name" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Alternative Name</label>
                        <input type="text" placeholder="enter alternative names" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Images URL's</label>
                        <input type="text" placeholder="enter image urls" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Price</label>
                        <input type="number" placeholder="enter product price" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Last Price</label>
                        <input type="number" placeholder="enter product last price" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Stocks</label>
                        <input type="number" placeholder="enter amount of stocks" className="h-[40px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="font-[400]">Description</label>
                        <textarea type="number" placeholder="description ..." className="h-[80px] px-2 py-1 border border-gray-300 rounded-[6px] focus:outline-none focus:border-blue-600 text-[14px] font-[400]"/>
                    </div>
                    <div className="flex">
                        <button className="bg-green-400 w-full py-2 cursor-pointer rounded-[6px] flex items-center justify-center text-[18px] hover:bg-green-500"> <MdAddTask className="mr-2"/> Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}