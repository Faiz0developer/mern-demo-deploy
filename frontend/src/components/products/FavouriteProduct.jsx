/* eslint-disable react/jsx-key */
import FavoutiteContext from "../../../store/ContextFavourite";
// import ProductList from "./ProductList";
import { useContext } from "react";
import ProductLayout from "./ProductLayout";

const FavouriteProduct = () => {
  const favouriteContext = useContext(FavoutiteContext);
  const products = favouriteContext.favouriteItems;
  
  return (
    <ul style={{display:"flex",flexDirection:"column",listStyle:'none', alignItems:"center" }}>
      {products.map((product) => {
        return (
          <>
          <ProductLayout product={product} key={product._id}/>
          
          </>
        );
      })}
    </ul>
  );
};

export default FavouriteProduct;
