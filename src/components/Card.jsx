import React, {useState} from "react";
import {FullCard} from "./FullCard.jsx";

const Card = ({id, title, date, img}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div
                onClick={openModal}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
                <img src={img} alt={title} className="w-full h-48 object-cover"/>
                <div className="pl-4 pr-1 flex justify-between">

                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString()}
                    </p>

                </div>
            </div>
            <FullCard isOpen={isOpen} closeModal={closeModal} id={id} />
        </>
    );
};

export default Card;
