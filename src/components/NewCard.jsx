import {useState} from "react";
import {createCard} from "../helpers/storageWorker.js";
import {useRerender} from "../helpers/rerenderContext.jsx";

export function NewCard({isOpen, closeModal}) {
    if (!isOpen) return null;
    const [date, setDate] = useState(null);
    const {triggerRerender} = useRerender();

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const dateObject = selectedDate ? new Date(selectedDate) : null;
        setDate(dateObject);
    };

    const handleSubmit = (event) => {
        const {title, imgUrl, content} = event.target

        if (date && title.value && imgUrl.value && content.value) {
            createCard(title.value, date, imgUrl.value, content.value);
            triggerRerender();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Add New Item</h2>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <input
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            id="title"
                            placeholder="Title"
                        />
                        <input
                            required
                            type="date"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            id="date"
                            placeholder="Date"
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            required
                            type="url"
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            id="imgUrl"
                            placeholder="Image URL"
                        />
                    </div>
                    <div className="mb-4">
        <textarea
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
            rows="4"
            id="content"
            placeholder="Enter content"
        ></textarea>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
