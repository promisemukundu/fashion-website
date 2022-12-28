import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AboutUs from "./pages/Pages/AboutUs";
import BlogDetails from "./pages/Pages/BlogDetails";
import CheckOut from "./pages/Pages/CheckOut";
import ShopDetails from "./pages/Pages/ShopDetails";
import ShopppingCart from "./pages/Pages/ShopppingCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog-details/:id" element={<BlogDetails />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="shop-details/:id" element={<ShopDetails />} />
        <Route path="shopping-cart" element={<ShopppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
