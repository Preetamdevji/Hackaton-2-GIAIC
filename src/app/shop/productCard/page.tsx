"use client";

import React from "react";
import ProductCard from "@/components/cart-page/ProductCard";



const ProductCardPage = () => {
  const dummyData = {
    id: 1,
    name: "Sample Product",
    srcUrl: "/images/pic3.png",
    attributes: ["Large", "Red"],
    quantity: 1,
    price: 100,
    discount: {
      percentage: 10,
      amount: 0,
    },
  }
  
  

  return <ProductCard data={dummyData} />;
};

export default ProductCardPage;
