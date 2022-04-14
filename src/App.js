import "./App.css";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import MyNav from "./components/MyNav";

function App() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  return (
    <>
      <MyNav
        setTitle={setTitle}
        title={title}
        artist={artist}
        setArtist={setArtist}
      />
      <HomePage
        lyrics={lyrics}
        setLyrics={setLyrics}
        artist={artist}
        title={title}
      />
    </>
  );
}

export default App;
