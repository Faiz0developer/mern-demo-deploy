/* eslint-disable react/prop-types */
import { useContext } from "react";
import FavoutiteContext from "../../../store/ContextFavourite";
import "./ProductItem.css";
import ProductLayout from "./ProductLayout";
import CustomWrapper from "../../UI/CustomWrapper";

const ProductItem = ({ product }) => {
  const favouriteContext = useContext(FavoutiteContext);
  const isFavourite = favouriteContext.isFavouriteItem(product._id);

  const toggleFavourite = () => {
    if (isFavourite) {
      favouriteContext.removeFavouriteItem(product._id);
    } else {
      favouriteContext.addFavouriteItem(product);
    }
  };
  return (
    <CustomWrapper>
      <ProductLayout product={product} />
      <div className="btn2">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "violet",
            borderColor: "violet",
            cursor: "pointer",
          }}
        >
          Buy
        </button>
        <button
          className={`heart ${isFavourite ? "fvrt" : "unFvrt"}`}
          onClick={toggleFavourite}
        ></button>
      </div>
    </CustomWrapper>
  );
};

export default ProductItem;
