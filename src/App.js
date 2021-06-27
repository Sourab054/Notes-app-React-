import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notelist, setNoteList] = useState(
    JSON.parse(localStorage.getItem("Notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notelist));
  }, [notelist]);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      description: "",
      lastModified: Date.now(),
    };
    setNoteList([newNote, ...notelist]);
  };

  const updateNote = (updatedNote) => {
    const updatedItems = notelist.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNoteList(updatedItems);
  };

  const deleteNote = (id) => {
    const updatedNote = notelist.filter((note) => note.id !== id);
    // console.log(updatedNote);
    setNoteList(updatedNote);
  };

  const getActiveNote = () => {
    return notelist.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notelist={notelist}
        addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        setActiveNote={setActiveNote}
        activeNote={getActiveNote()}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
