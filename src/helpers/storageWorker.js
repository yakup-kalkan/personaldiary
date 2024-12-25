const localStorageKey = "diary"

// Create an item in Local Storage
export function createCard(title, date, imgUrl, content) {
    const newCard = cardConstructor(title, date, imgUrl, content);
    localStorage.setItem(localStorageKey, JSON.stringify([...getAllCard(), newCard]));
}

export function getAllCard(){
    const allCards = JSON.parse(localStorage.getItem(localStorageKey));
    return allCards ? allCards : [];
}
// Read an item from Local Storage
export function getCard(id) {
    const expectedCard = getAllCard().find((el) => el.id === id);

    if (expectedCard !== undefined){
        return expectedCard
    } else {
        alert("Invalid id")
        return null;
    }
}

// Delete an item from Local Storage
export function deleteCard(id) {

    if (id && getAllCard().find((el) => el.id === id)){
        const newCardList = getAllCard().filter((el) => el.id !== id );
        localStorage.setItem(localStorageKey, JSON.stringify([...newCardList]))
        return console.log("The entry has been deleted");
    } else {
        return console.log("Invalid id");
    }
}

// Clear all items from Local Storage
function clearStorage() {
    localStorage.clear();
}

function cardConstructor(title, date, imgUrl, content) {
    return {
        id: getUniqueId(),
        title: title,
        date: date,
        img: imgUrl,
        content: content
    }
}

function getUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}




