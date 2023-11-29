import { useState } from "react";
import { nanoid } from "nanoid";
import { Button, TextField } from "@mui/material";

export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
    console.log(title);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      played: false,
      id: nanoid(),
      addedAt: new Date().toLocaleString(),
    };
    props.addSong(newSong);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-task">
        <TextField
          type="text"
          onChange={handleTitleChange}
          value={title}
          label="Add a new task..."
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}
