import { Link } from "react-router-dom";
import Navstyles from "./Navbar.module.css";
import FavoutiteContext from "../../../store/ContextFavourite";
import { useContext } from "react";

const NAvbar = () => {
  const { favouriteItems } = useContext(FavoutiteContext);
  const numberOfFavouriteItem = favouriteItems.length;

  return (
    <nav className={Navstyles.nav}>
      <ul className={Navstyles.ul}>
        <li>
          <Link to="/" className={Navstyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={Navstyles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Navstyles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" className={Navstyles.link}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/products/add" className={Navstyles.link}>
            Add Products
          </Link>
        </li>
        <li className={Navstyles.fvrtCount}>
          <Link to="/products/favourite" className={Navstyles.link}>
            {numberOfFavouriteItem}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NAvbar;
