import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: "1",
        title: "Day 1",
        img: "https://picsum.photos/200/300?random=1", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-11T15:28:37.332Z",
      },
      {
        id: "2",
        title: "Day 2",
        img: "https://picsum.photos/200/300?random=2", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-12T15:28:37.332Z",
      },
      {
        id: "3",
        title: "Day 3",
        img: "https://picsum.photos/200/300?random=3", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-13T15:28:37.332Z",
      },
      {
        id: "4",
        title: "Day 4",
        img: "https://picsum.photos/200/300?random=4", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-14T15:28:37.332Z",
      },
      {
        id: "5",
        title: "Day 5",
        img: "https://picsum.photos/200/300?random=5", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-15T15:28:37.332Z",
      },
      {
        id: "6",
        title: "Day 6",
        img: "https://picsum.photos/200/300?random=6", // Example image placeholder
        content: "sdfksdfslkd",
        date: "2024-12-16T15:28:37.332Z",
      },
    ];

    setCardData(data);
  }, []);

  return (
    <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cardData.map((entry) => (
        <Card key = {entry.id}
          id={entry.id}
          title={entry.title}
          date={entry.date}
          img={entry.img}
        />
      ))}
    </div>
  );
};
export default CardContainer;
