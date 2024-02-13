/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FavoutiteContext = createContext({
  favouriteItems: [],
  addFavouriteItem: () => {},
  removeFavouriteItem: () => {},
  isFavouriteItem: () => {},
});

export const ContextFavourite = (props) => {
  const [userFavourite, setUserFavourite] = useState([]);

  const addFavouriteItem = (product) => {
    setUserFavourite((prevItem) => {
      return [...prevItem, product];
    });
  };

  const removeFavouriteItem = (id) => {
    setUserFavourite((prevData) => {
      return prevData.filter((product) => product._id !== id);
    });
  };

  const isFavouriteItem = (id) => {
    return userFavourite.some((product) => product._id === id);
  };

  const context = {
    favouriteItems: userFavourite,
    addFavouriteItem,
    removeFavouriteItem,
    isFavouriteItem,
  };

  return (
    <FavoutiteContext.Provider value={context}>
      {props.children}
    </FavoutiteContext.Provider>
  );
};

export default FavoutiteContext;
