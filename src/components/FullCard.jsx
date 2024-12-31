import {useEffect, useState} from "react";
import {deleteCard, getCard} from "../helpers/storageWorker.js";
import {useRerender} from "../helpers/rerenderContext.jsx";

export function FullCard({isOpen, closeModal, id}) {
    if (!isOpen) return null;
    const [isCard, setIsCard] = useState('')
    const {triggerRerender} = useRerender();

    async function handleOnDelete() {
        await deleteCard(id);
        await triggerRerender();
        closeModal();
    }

    useEffect(() => {
        const card = getCard(id);
        setIsCard(card);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
             onClick={closeModal}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto"
                 onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">{isCard.title}</h2>
                    <p className="text-sm text-gray-600">{new Date(isCard.date).toLocaleDateString()}</p>
                </div>
                <div className="mb-4 flex justify-center">
                    <img className="rounded-lg object-contain w-full max-h-64" src={isCard.img} alt={isCard.title}/>
                </div>
                <p className="text-gray-700 text-base leading-relaxed break-words mb-4">{isCard.content}</p>
                <div className="mt-6 flex justify-end">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mr-4"
                            onClick={handleOnDelete}>Delete
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            onClick={closeModal}>Close
                    </button>
                </div>
            </div>
        </div>
    )
}
