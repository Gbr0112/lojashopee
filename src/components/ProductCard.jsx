import React from "react";

const ProductCard = ({ produto }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-sm w-full hover:scale-105 transition">
      <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover rounded-xl mb-3"/>
      <h2 className="text-lg font-semibold text-orange-600">{produto.nome}</h2>
      <p className="text-gray-700 mb-2">{produto.descricao}</p>
      <a
        href={produto.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-4 py-2 rounded-lg block text-center hover:bg-orange-600"
      >
        Ver na Shopee
      </a>
    </div>
  );
};

export default ProductCard;