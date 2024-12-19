import { useState } from "react";
import Popup from "./PopUp";
import {editCard, createCard, getCard } from "../helpers/storageWorker";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [initialData, setInitialData] = useState(null);

  const togglePopup = (cardId = null) => {
    setIsPopupOpen(!isPopupOpen);
    
    if (cardId) {
      const card = getCard(cardId);
      setInitialData(card[0]); 
    } else {
      setInitialData(null);
    }
  };

  const handleSave = (data) => {
    if (data.id) {
      editCard(data.id, data);
    } else {
      // Yeni kart ekle
      createCard(data.title, data.date, data.imgUrl, data.content);
    }
    setIsPopupOpen(false); // Popup'ı kapat
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        {/* Logo */}
        <img src="./src/img/logo.jpg" className="h-24" />
        {/* Add Entry Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => togglePopup()} // Open Popup for New Entry
        >
          Add Entry
        </button>
      </header>
      {/* Popup component */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSave={handleSave} initialData={initialData} />
    </>
  );
};

export default Header;
