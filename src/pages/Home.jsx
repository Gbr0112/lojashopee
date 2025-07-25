import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true); // opcional: exibir carregando

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1CF0rU4zV-UOWJQL9eHNHc0T8HaTG9CkaTzIdgbg98oM/Produtos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProdutos(data);
        } else {
          console.warn("Dados recebidos não são um array:", data);
          setProdutos([]);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setProdutos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-8">
        Meus Achadinhos - Shopee
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Carregando produtos...</p>
      ) : Array.isArray(produtos) && produtos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {produtos.map((produto, i) => (
            <ProductCard key={i} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
      )}
    </div>
  );
};

export default Home;
