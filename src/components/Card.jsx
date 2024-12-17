import React from "react";

const Card = ({ id, title, date, img }) => {
  const handleClick = () => {
    console.log(`${id} Card clicked`);
  };

  return (
    <div  
      onClick={handleClick}
      className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="pl-4 pr-1 flex justify-between">

          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>

      </div>
    </div>
  );
};

export default Card;
