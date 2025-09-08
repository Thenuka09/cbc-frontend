import { Link, Route, Routes } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";
import AdminDashboardPage from "./admin/admin-dashboard-page";
import AdminProductsPage from "./admin/admin-products-page";
import AdminOrdersPage from "./admin/admin-orders-page";
import AdminCustomersPage from "./admin/admin-customers-page";

export default function AdminHomePage() {
  return (
    <div className="flex">
      {/* admin-navbar */}
      <div className="bg-blue-400 w-[20%] h-screen flex flex-col items-center">
        {/* links */}
        <div className="w-[80%] bg-white rounded-xl h-[40px] mt-4 flex justify-center items-center">
          <div className="flex items-center text-[16px] font-[400]">
            <IoBarChartOutline className="mr-2 relative top-0.5 font-bold" size={14}/>
            <Link to="/admin/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl h-[40px] mt-4 flex justify-center items-center">
          <div className="flex items-center text-[16px] font-[400]">
            <AiOutlineProduct className="mr-2 relative top-0.5" />
            <Link to="/admin/products">Products</Link>
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl h-[40px] mt-4 flex justify-center items-center">
          <div className="flex items-center text-[16px] font-[400]">
            <MdOutlineLocalGroceryStore className="mr-2 relative top-0.5" />
            <Link to="/admin/orders">Orders</Link>
          </div>
        </div>
        <div className="w-[80%] bg-white rounded-xl h-[40px] mt-4 flex justify-center items-center">
          <div className="flex items-center text-[16px] font-[400]">
            <PiUsersThree className="mr-2 relative" />
            <Link to="/admin/customers">Customers</Link>
          </div>
        </div>
      </div>
      {/* contents */}
      <div className="bg-white h-screen w-[80%] px-4">
            <Routes path="/*">
                <Route path="/dashboard" element={<AdminDashboardPage/>}/>
                <Route path="/products" element={<AdminProductsPage/>}/>
                <Route path="/orders" element={<AdminOrdersPage/>}/>
                <Route path="/customers" element={<AdminCustomersPage/>}/>
            </Routes>
      </div>
    </div>
  );
}
