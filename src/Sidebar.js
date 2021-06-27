import React from "react";
import ReactMarkdown from "react-markdown";
import { AiFillDelete } from "react-icons/ai";

const Sidebar = ({
  addNote,
  notelist,
  deleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notelist.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <AiFillDelete
                size="22"
                className="delete-icon"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </AiFillDelete>
            </div>
            <ReactMarkdown className="sidebar-note-desc">
              {note.description && note.description.substr(0, 100) + "...."}
            </ReactMarkdown>
            <small className="note-meta">
              Last Modified {new Date(note.lastModified).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
