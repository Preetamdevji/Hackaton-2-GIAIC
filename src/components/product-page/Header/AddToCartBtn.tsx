"use client";

import React from "react";
import { Product } from "@/types/product.types";
import { useRouter } from "next/navigation";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    console.log("data", data);
    router.push("/shop/productCard"); // Redirect to the ProductCard page
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;