import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NAvbar from "./components/layout/NAvbar";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import FavouriteProductPage from "./pages/FavouriteProductPage";

function App() {
  return (
    <>
      <header>
        <NAvbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/favourite" element={<FavouriteProductPage />} />
      </Routes>
    </>
  );
}

export default App;
