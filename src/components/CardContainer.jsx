import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllCard } from "../helpers/storageWorker";
import Popup from "./Popup";
import { editCard, deleteCard } from "../helpers/storageWorker";

const CardContainer = () => {
  const [cardData, setCardData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    // Veritabanından kartları alıyoruz
    setCardData(getAllCard().reverse());
  }, []);

  const handleCardClick = (card) => {
    // Tıklanan kartın bilgilerini Popup'a aktarıyoruz
    setCurrentCard(card);
    setIsPopupOpen(true); // Popup'ı açıyoruz
  };

  const handleSave = (updatedCard) => {
    if (updatedCard.id) {
      // Kartı güncelle
      editCard(updatedCard.id, updatedCard);
    } else {
      // Yeni kart ekle (eğer id yoksa)
      createCard(updatedCard.title, updatedCard.date, updatedCard.imgUrl, updatedCard.content);
    }
    setCardData(getAllCard().reverse()); // Kartları tekrar güncelle
    setIsPopupOpen(false); // Popup'ı kapatıyoruz
  };

  const handleDelete = (id) => {
    deleteCard(id); // Kartı sil
    setCardData(getAllCard().reverse()); // Kartları tekrar güncelle
    setIsPopupOpen(false); // Popup'ı kapat
  };

  const handleClosePopup = () => {
    // Popup'ı kapatıyoruz
    setIsPopupOpen(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cardData.map((entry) => (
        <Card
          key={entry.id}
          id={entry.id}
          title={entry.title}
          date={entry.date}
          img={entry.img}
          imgUrl={entry.imgUrl}
          content={entry.content} // content verisini de Card'a iletiyoruz
          onClick={handleCardClick} // Kart tıklanıldığında handleCardClick'i çağırıyoruz
        />
      ))}

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSave={handleSave}
        onDelete={handleDelete}
        initialData={currentCard} // Popup'a tıklanan kartın bilgilerini gönderiyoruz
      />
    </div>
  );
};

export default CardContainer;
