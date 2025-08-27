"use client";

import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function DiscountCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "/api/all-products?category=Discount Collections"
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold mb-6">Discount Collections</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-320 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
