import { useEffect, useState } from "react";
import { cartDataContext } from "./CartStateContext";

const CartStateProvider = ({ children }) => {
  const [localCartData, setLocalCartData] = useState([]);

  useEffect(() => {
    let data = (window && window.localStorage.getItem("cart")) || [];
    setLocalCartData(data);
  }, []);

  const addToCart = ({
    pid,
    title,
    price,
    imgUrl,
    selectedColor,
    selectedSize,
  }) => {
    setLocalCartData([
      ...localCartData,
      { pid, title, price, imgUrl, selectedColor, selectedSize },
    ]);

    window && window.localStorage.setItem("cart", localCartData);
  };

  const updateCart = (pid, selectedColor, selectedSize, count) => {
    const allProductsData = localCartData;
    const productIndex = allProductsData.findIndex((product) => {
      return (
        product.pid === pid &&
        product.selectedColor === selectedColor &&
        product.selectedSize === selectedSize
      );
    });

    if (productIndex === -1) return;

    const oldProduct = allProductsData[productIndex];

    if (selectedSize !== oldProduct.selectedSize) {
      oldProduct.selectedSize = selectedSize;
    } else if (selectedColor !== oldProduct.selectedColor) {
      oldProduct.selectedColor = selectedSize;
    } else if (count !== oldProduct.count) {
      oldProduct.count = count;
    }

    //   updating the value
    allProductsData.splice(productIndex, 1, oldProduct);

    setLocalCartData(allProductsData);
    window && window.localStorage.setItem("cart", localCartData);
  };

  return (
    <cartDataContext.Provider value={{ localCartData, addToCart, updateCart }}>
      {children}
    </cartDataContext.Provider>
  );
};

export default CartStateProvider;
