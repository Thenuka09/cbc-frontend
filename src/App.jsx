import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login-page";
import AdminHomePage from "./pages/admin-home-page";
import SignUpPage from "./pages/signup-page";
import HomePage from "./pages/customers/home-page";
import ProductPage from "./pages/customers/products-page";
import ContactUsPage from "./pages/customers/contact-us-page";
import AboutUsPage from "./pages/customers/about-us-page";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Routes path="/*">
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/admin/*" element={<AdminHomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
