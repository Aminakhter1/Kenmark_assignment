
import { useEffect, useState } from "react";

export default function NoteFormModal({ isOpen, onClose, onSubmit, editingNote }) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editingNote) {
      setFormData({ title: editingNote.title, content: editingNote.content });
    } else {
      setFormData({ title: "", content: "" });
    }
  }, [editingNote]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">{editingNote ? "Edit Note" : "New Note"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white "
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full p-2 rounded border h-24 resize-none dark:bg-gray-700 dark:text-white"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded text-white">
            Cancel
          </button>
          <button
            onClick={() => onSubmit(formData)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            {editingNote ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
