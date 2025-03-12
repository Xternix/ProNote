import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteList from "../components/NoteList";

function Notes() {
  const { notes, addNote } = useContext(NotesContext);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(newNote);
      setNewNote("");
    }
  };

  return (
    <div>
      <h1>Your Notes</h1>
      <input
        type="text"
        placeholder="Write a note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handleAddNote}>
         Note
      </button>
      <NoteList notes={notes} />
    </div>
  );
}

export default Notes;