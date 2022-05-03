import { findItemInDbById } from "../../scripts/api";
import { renderItemDetailsPage } from "../../scripts/tools";
import { useEffect } from "react";

const ProductInfo = ({cartItems, setCartItems, selectedItem, setSelectedItem, currentUser}) => {
  const id = window.location.pathname.replace("/product/", "");

  //Add id dependency into useEffect to prevent infinite looping
  useEffect(() => {
    findItemInDbById(id, setSelectedItem);
  }, [id]); //eslint-disable-line

  let rows = renderItemDetailsPage(selectedItem, cartItems, setCartItems, currentUser);

  return <main>{rows}</main>;
};

export default ProductInfo;
