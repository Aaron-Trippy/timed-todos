import React, { useState } from "react";
import Song from "./Song";
import SongForm from "./SongForm";

export default function Playlist() {
  const [songs, setSongs] = useState([]);

  function addSong(song) {
    setSongs([...songs, song]);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;
        // Update completed timestamp
        song.completedAt = song.played ? new Date().toLocaleString() : null;
        return song;
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
  }

  function editSong(track, editedTitle) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.title = editedTitle;
        return song;
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
  }

  return (
    <div>
      <SongForm addSong={addSong} />
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            remove={removeSong}
            togglePlayed={togglePlayed}
            editSong={editSong}
          />
        ))}
      </ul>
    </div>
  );
}
