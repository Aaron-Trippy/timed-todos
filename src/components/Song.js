import React, { useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";

export default function Song(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.song.title);

  function handleDelete() {
    props.remove(props.song);
  }

  function handleStatusChange() {
    props.togglePlayed(props.song);
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    // Save the changes
    props.editSong(props.song, editedTitle);
    setEditing(false);
  }

  function handleCancelEdit() {
    // Cancel the editing
    setEditing(false);
  }

  function handleTitleChange(e) {
    setEditedTitle(e.target.value);
  }

  return (
    <li className="song">
      <div className="song-details">
        {isEditing ? (
          <div className="editing">
            <TextField
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              label="Edit Task"
              variant="outlined"
            />
            <Button variant="text" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="text" color="error" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </div>
        ) : (
          <p>
            <span>
              {props.song.played === true ? (
                <del>{props.song.title}</del>
              ) : (
                props.song.title
              )}
              <Checkbox
                onChange={handleStatusChange}
                checked={props.song.played}
                color="primary"
              />
            </span>
            <span>{props.song.artist}</span>
            {props.song.played && (
              <span>
                Completed at: {props.song.completedAt || "Not available"}
              </span>
            )}
            <span>Added at: {props.song.addedAt}</span>
          </p>
        )}
      </div>
      <div className="controls">
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
          className="editTask"
        >
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Remove
        </Button>
      </div>
    </li>
  );
}
