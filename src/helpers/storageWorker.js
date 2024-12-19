const localStorageKey = "diary";

// Create an item in Local Storage
export function createCard(title, date, imgUrl, content) {
    const newCard = cardConstructor(title, date, imgUrl, content);
    const allCards = getAllCard();
    allCards.push(newCard); // Kartı ekliyoruz
    localStorage.setItem(localStorageKey, JSON.stringify(allCards));
}

// Get all cards from Local Storage
export function getAllCard() {
    const allCards = JSON.parse(localStorage.getItem(localStorageKey));
    return allCards ? allCards : []; 
}

// Get a single card by its id
export function getCard(id) {
    const card = getAllCard().find((el) => el.id === id);
    return card || null; 
}

// Delete an item from Local Storage
export function deleteCard(id) {
    const allCards = getAllCard();
    const updatedCards = allCards.filter((card) => card.id !== id);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedCards));
  }

export function editCard(id, updatedData) {
    const allCards = getAllCard();
    const updatedCards = allCards.map((card) =>
      card.id === id ? { ...card, ...updatedData } : card
    );
    localStorage.setItem(localStorageKey, JSON.stringify(updatedCards));
  }

// Clear all items from Local Storage
function clearStorage() {
    localStorage.clear();
}

// Helper function to construct a new card object
function cardConstructor(title, date, imgUrl, content) {
    const allCards = getAllCard(); // Tüm kartları alıyoruz
    const newId = allCards.length > 0 ? Math.max(...allCards.map(card => card.id)) + 1 : 1; // En yüksek ID'yi bulup, 1 arttırıyoruz
    return {
        id: newId, 
        title: title,
        date: date,
        img: imgUrl,
        content: content
    };
}
