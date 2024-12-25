import {useState, useEffect} from "react";
import Card from "./Card";
import {getAllCard} from "../helpers/storageWorker.js";
import {useRerender} from "../helpers/rerenderContext.jsx";

const CardContainer = () => {
    const {isRerender} = useRerender();
    const [cardData, setCardData] = useState([]);


    useEffect(() => {
        const allCard = getAllCard()
        setCardData(allCard.reverse());
    }, [isRerender]);

    return (
        <div className="flex-grow">
            <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {cardData.map((entry) => (
                    <Card key={entry.id}
                          id={entry.id}
                          title={entry.title}
                          date={entry.date}
                          img={entry.img}
                    />
                ))}
            </div>
        </div>
    );
};
export default CardContainer;
