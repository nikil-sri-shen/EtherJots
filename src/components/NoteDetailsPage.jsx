import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import { useParams } from "react-router-dom";

function NoteDetailsPage() {
  const { userNotes } = useContext(NotesContext);
  const { id, title } = useParams();

  const selectedNote = userNotes.find(
    (note) => note.noteId === parseInt(id, 10) && note.title === title
  );

  if (!selectedNote) {
    return <div>Note not found</div>;
  }

  return (
    <div>
      <h1
        style={{ fontFamily: "Dancing Script, cursive" }}
        className="text-center text-black text-5xl mt-5 bg-white rounded-full mx-96 py-4"
      >
        📓EtherJots
        <div className="block">
          <span style={{ fontFamily: "Caveat" }} className="text-2xl">
            A Decentralized Notes App
          </span>
        </div>
      </h1>
      <h1
        style={{ fontFamily: "Dancing Script, cursive" }}
        className="text-center text-white text-5xl mt-5"
      >
        Note Details
      </h1>
      <div className="bg-white p-8 m-2 mr-96 ml-96 mt-20 rounded-lg text-center transition-transform transform hover:shadow-4xl hover:scale-105">
        <h3
          style={{ fontFamily: "Caveat" }}
          className="text-4xl font-bold underline"
        >
          {selectedNote.title}
        </h3>
        <p className="text-2xl mt-4">{selectedNote.content}</p>
      </div>
    </div>
  );
}

export default NoteDetailsPage;
