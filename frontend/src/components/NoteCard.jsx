import { motion } from "framer-motion";

export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:scale-105 transition-transform relative max-w-sm w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-semibold break-words pr-20">{note.title}</h3>
      <p className="text-sm mt-2 max-h-40 overflow-auto break-words pr-2">
        {note.content}
      </p>

      <div className="absolute top-4 right-4 flex gap-2">
        <button onClick={() => onEdit(note)} className="text-sm text-yellow-500 hover:text-yellow-400">
          Edit
        </button>
        <button onClick={() => onDelete(note._id)} className="text-sm text-red-500 hover:text-red-400">
          Delete
        </button>
      </div>
    </motion.div>
  );
}
