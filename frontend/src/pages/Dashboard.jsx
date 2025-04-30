import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import NoteFormModal from "../components/NoteFormModal";
import API from "../services/api";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const navigate = useNavigate();

  // Fetch notes from API
  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  // Fetch notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);

  // Handle create/edit note
  const handleCreate = async (formData) => {
    if (editingNote) {
      await API.put(`/notes/${editingNote._id}`, formData);
    } else {
      await API.post("/notes/add", formData);
    }
    fetchNotes();
    setModalOpen(false);
    setEditingNote(null);
  };

  // Handle delete note
  const handleDelete = async (id) => {
    await API.delete(`/notes/${id}`);
    setNotes((prev) => prev.filter((n) => n._id !== id));
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dark">
      {/* Sidebar & Topbar */}
      <div className="p-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <button
          onClick={() => {
            setEditingNote(null);
            setModalOpen(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + New Note
        </button>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onEdit={(n) => {
              setEditingNote(n);
              setModalOpen(true);
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <NoteFormModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingNote(null);
        }}
        onSubmit={handleCreate}
        editingNote={editingNote}
      />
    </div>
  );
}
