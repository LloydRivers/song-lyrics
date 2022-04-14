import axios from "axios";
import React, { useEffect } from "react";
// import axios from "axios";

// Build a database of artists, albums and songs, including their lyrics. Add a nice interface, add the ability to search by lyrics

// FOR EVIDENCE: please upload a document with a link to test your app working and a link to the code repo

function HomePage({ lyrics, artist, title, setLyrics }) {
  const getData = async () => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

    axios
      .get(url)
      .then((response) => {
        if (response.statusText === "OK") {
          setLyrics(response.data.lyrics);
        }
      })
      .catch((error) => setLyrics("Please enter an artist and song name"));
  };

  useEffect(() => {
    getData();
  }, [artist, title]);

  return (
    <div className="text-center">
      <pre>{lyrics}</pre>
    </div>
  );
}

export default HomePage;
