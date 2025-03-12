export function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}
  
export function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
}
  