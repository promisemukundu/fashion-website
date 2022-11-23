import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
