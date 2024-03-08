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

        const notesData = await notescontract.methods
          .getUserNotes(account[0])
          .call();

        //making data into arrays
        const titles = notesData.titles || [];
        const contents = notesData.contents || [];
        const noteIds = notesData.noteIds || [];

        const noteArray = titles.map((title, index) => ({
          noteId: parseInt(noteIds[index]),
          title,
          content: contents[index],
        })); //making array of array into array of objects.

        setUserNotes(noteArray);
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
