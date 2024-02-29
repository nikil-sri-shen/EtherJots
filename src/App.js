import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NoteDetailsPage from "./components/NoteDetailsPage";
import { NotesProvider } from "./components/NotesContext";

function App() {
  return (
    <Router>
      <NotesProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/note/:id/:title" element={<NoteDetailsPage />} />
        </Routes>
      </NotesProvider>
    </Router>
  );
}

export default App;
