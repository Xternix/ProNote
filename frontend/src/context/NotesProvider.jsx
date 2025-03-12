// NotesProvider.js
import { useState } from "react";
import { NotesContext } from "./NotesContext"; // Import the context

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
