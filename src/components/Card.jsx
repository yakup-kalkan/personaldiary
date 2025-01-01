import React from "react";

const Card = ({ id, title, date, img, imgUrl, content, onClick }) => {
  return (
    <div
      onClick={() => onClick({ id, title, date, img, imgUrl, content })}
      className="w-80 h-96 bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img src={img} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Card;
