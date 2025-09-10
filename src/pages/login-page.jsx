import { useState } from "react";
import axios from "axios";
import { LiaUserShieldSolid } from "react-icons/lia";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai"; //eye
import { AiOutlineEyeInvisible } from "react-icons/ai"; // eye-disab;e
import toast from "react-hot-toast";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(AiOutlineEyeInvisible);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(AiOutlineEye);
      setType("text");
    } else {
      setIcon(AiOutlineEyeInvisible);
      setType("password");
    }
  };

  async function login(e) {
    e.preventDefault(); // stop form reload

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: email,
          password: password,
        }
      );

      // check user is null
      if (response.data.userData == null) {
        toast.error(response.data.message);
        return;
      }

      // success toast message
      toast.success(response.data.message);

      console.log(response);
      // save the token to local storage
      localStorage.setItem("token", response.data.token);

      // redirect
      if (response.data.userData.type == "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (e) {
      console.error("Login Failed", e);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[430px] h-[380px] mx-auto border border-gray-400 rounded-2xl px-4 py-4 shadow-md">
        <form className="space-y-6 flex flex-col">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <LiaUserShieldSolid size={16} />
              <label className="ml-2 text-[16px] font-[600]">
                Enter User Name:
              </label>
            </div>

            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your usename"
              className="text-[14px] border px-1.5 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <RiLockPasswordLine size={16} />
              <label className="ml-2 text-[16px] font-[600]">
                Enter User Password:
              </label>
            </div>
            <div className="relative w-full">
              <input
                type={type}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-[14px] border px-1.5 py-2 rounded-lg border-gray-400 focus:outline-none focus:border-blue-600"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={handleToggle}
              >
                {icon}
              </span>
            </div>
          </div>

          <div className="flex justify-between px-1">
            <Link to={"/"} className="text-[14px] cursor-pointer">
              Forgot your password?
            </Link>
            <Link
              to={"/signup"}
              className="underline text-[14px] cursor-pointer"
            >
              Sign-Up
            </Link>
          </div>

          <button
            className="flex items-center justify-center border p-1.5 text-white rounded-lg bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-[20px] font-[600] cursor-pointer"
            onClick={login}
            // type="submit"
          >
            <SlLogin size={16} className="mr-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
