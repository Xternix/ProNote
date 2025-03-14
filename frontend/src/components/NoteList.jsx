import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
