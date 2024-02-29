import React, { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";
import { useNavigate } from "react-router-dom";
import web3 from "../web3.js";
import notescontract from "../notescontract.js";

function HomePage() {
  const { userNotes } = useContext(NotesContext);
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleCardClick = (note) => {
    navigate(`/note/${note.noteId}/${note.title}`);
  };

  const handleAddClick = () => {
    setShowAddCard(true);
  };

  const handleAddCardClose = () => {
    setShowAddCard(false);
  };

  const handleAddNoteClick = async () => {
    const account = await web3.eth.getAccounts();
    try {
      await notescontract.methods.addNote(title, content).send({
        from: account[0],
        gas: 3000000,
      });
    } catch (e) {
      console.error(e);
    }
    setShowAddCard(false);
  };

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
      <h3 className="text-center text-white text-3xl mt-5">
        Your Notes Palette
      </h3>

      {userNotes.length === 0 ? (
        <div>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-center text-white text-5xl mt-20
          "
          >
            Hey! Start writing your first note!
          </p>
          <br></br>
          <p
            style={{ fontFamily: "Pacifico" }}
            className="text-center text-white text-4xl"
          >
            It seems you haven't yet...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 p-10 bg-gray-300 mt-8 ml-8 mr-8 h-auto rounded-lg">
          {userNotes.map((note) => (
            <div
              key={note.noteId}
              className="bg-white p-8 m-2 rounded-lg transition-transform transform shadow-4xl hover:shadow-4xl hover:scale-105 text-center border-2 border-dashed border-blue-400 hover:border-solid hover:border-blue-600"
              onClick={() => handleCardClick(note)}
            >
              <h3
                style={{ fontFamily: "Caveat" }}
                className="text-3xl font-bold text-center mb-2 underline"
              >
                {note.title}
              </h3>
              <p className="text-xl overflow-hidden h-16">{note.content}</p>
              <button
                className="text-blue-500 hover:underline mt-2 cursor-pointer text-center"
                onClick={() => handleCardClick(note)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}

      <div
        className="fixed bottom-4 right-4 bg-white p-2 mr-10 mb-4 rounded-md cursor-pointer flex"
        onClick={handleAddClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-black text-lg"> Add note</span>
      </div>

      {showAddCard && (
        <div className="fixed inset-0 flex items-center justify-center text-center ">
          <div className="bg-white p-4 rounded-lg shadow-4xl">
            <h2 className="text-2xl font-bold mb-4">Add Note</h2>
            <div className="text-lg">
              <input
                size={30}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the title..."
                className="border-2 border-solid rounded-md"
              ></input>
              <br></br>
              <br></br>
              <textarea
                rows={8}
                cols={75}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter the notes..."
                className="border-2 border-solid rounded-md"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:scale-105"
              onClick={handleAddNoteClick}
            >
              Add
            </button>
            <button
              className="ml-4 text-gray-500 hover:scale-105"
              onClick={handleAddCardClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
