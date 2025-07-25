import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1CF0rU4zV-UOWJQL9eHNHc0T8HaTG9CkaTzIdgbg98oM/Produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-8">Meus Achadinhos - Shopee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {produtos.map((produto, i) => (
          <ProductCard key={i} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default Home;