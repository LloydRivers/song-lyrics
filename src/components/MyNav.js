import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNav({ setTitle, setArtist }) {
  const [form, setForm] = useState({
    artist: "",
    song: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    setTitle(form.song);
    setArtist(form.artist);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Search Lyrics!
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search artist"
                aria-label="Search"
                onChange={(e) => setForm({ ...form, artist: e.target.value })}
              />
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search song"
                aria-label="Search"
                onChange={(e) => setForm({ ...form, song: e.target.value })}
              />
              <button
                onClick={(e) => handleForm(e)}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
