import { useState, useEffect } from "react";

const Popup = ({ isOpen, onClose, onSave, initialData, onDelete }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [img, setImg] = useState(initialData?.img || "");
  const [imgUrl, setImgUrl] = useState(initialData?.imgUrl || "");
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDate(initialData.date);
      setImg(initialData,img);
      setImgUrl(initialData.imgUrl);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImg(reader.result); // takes it as Base64 
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = { title, date, img, imgUrl, content, id: initialData?.id };
    onSave(updatedData); // Save the data
    onClose(); // Close Popup
  };

  const handleDelete = () => {
    if (initialData?.id) {
      onDelete(initialData.id); // Call delete function with id
      onClose(); // Close Popup after deleting
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mt-10">
        <h2 className="text-lg font-bold mb-4">{initialData ? 'Edit Entry' : 'Add New Entry'}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows="4"
              
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Enter content"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            {initialData && (
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
