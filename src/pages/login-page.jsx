import React from "react";
import { LiaUserShieldSolid } from "react-icons/lia";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[430px] h-[380px] mx-auto border border-gray-400 rounded-2xl px-4 py-4 shadow-md">
        <form className="space-y-5 flex flex-col">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <LiaUserShieldSolid size={16} />
              <label className="ml-2 text-[16px] font-[600]">
                Enter User Name:
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter your usename"
              className="text-[14px] border px-1.5 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <RiLockPasswordLine size={16}/>
              <label className="ml-2 text-[16px] font-[600]">
                Enter User Password:
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter your password"
              className="text-[14px] border px-1.5 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex justify-between px-1">
            <Link to={"/"} className="text-[14px] cursor-pointer">Forgot your password?</Link>
            <Link to={"/signup"} className="underline text-[14px] cursor-pointer">Sign-Up</Link>
          </div>

          <button className="flex items-center justify-center border p-1.5 text-white rounded-lg bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-[20px] font-[600] cursor-pointer">
            <SlLogin size={16} className="mr-2"/>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
