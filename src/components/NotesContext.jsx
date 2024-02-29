import React, { createContext, useState, useEffect } from "react";
import web3 from "../web3";
import notescontract from "../notescontract";

const NotesContext = createContext();

function NotesProvider({ children }) {
  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const account = await web3.eth.getAccounts();
        console.log(account);

        const notesData = await notescontract.methods
          .getUserNotes(account[0])
          .call();
        console.log(notesData);

        // Ensure titles, contents, and noteIds are arrays
        const titles = notesData.titles || [];
        const contents = notesData.contents || [];
        const noteIds = notesData.noteIds || [];

        // Zip the arrays to create an array of objects
        const noteArray = titles.map((title, index) => ({
          noteId: parseInt(noteIds[index]),
          title,
          content: contents[index],
        }));

        setUserNotes(noteArray);
        console.log(userNotes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userNotes]);

  return (
    <NotesContext.Provider value={{ userNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export { NotesProvider, NotesContext };
