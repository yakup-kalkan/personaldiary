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
    const expectedCard = getAllCard().filter((el) => el.id === id);

    if (expectedCard){
        return expectedCard
    } else {
        return alert("Invalid id");
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
        id: getAllCard() ? getAllCard().length + 1 : 0,
        title: title,
        date: date,
        img: imgUrl,
        content: content
    }
}




