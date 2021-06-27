import React from "react";
import ReactMarkdown from "react-markdown";
import { BsX } from "react-icons/bs";

const Main = ({ activeNote, updateNote, setActiveNote }) => {
  const editNote = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No notes selected</div>;

  return (
    <div className="app-main">
      <BsX
        size="24"
        className="cancel-icon"
        onClick={() => setActiveNote(false)}
      ></BsX>
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          placeholder="Note Title"
          autoComplete="off"
          autoFocus
          onChange={(e) => editNote("title", e.target.value)}
        />
        <textarea
          id="description"
          value={activeNote.description}
          placeholder="Write your note here..."
          onChange={(e) => editNote("description", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
