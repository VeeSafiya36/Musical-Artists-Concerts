import React from "react";
import { useState, useEffect } from "react";

function Form({ artists, setArtists, getArtists }) {
  const [newName, setNewName] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newDate, setNewDate] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPicture, setUpdatedPicture] = useState("");
  const [updatedCity, setUpdatedCity] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const API_URL = "https://64f168df0e1e60602d23c0eb.mockapi.io/artists";

  function postNewArtist(e) {
    e.preventDefault();
  

  let data = {
    name: newName,
    picture: newPicture,
    city: newCity,
    date: newDate,
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => getArtists());

  setArtists(...artists, data)
}
  function updateArtist(e,artistObject) {
    e.preventDefault();

    let updatedArtistObject = {
      name: updatedName,
      picture: updatedPicture,
      city: updatedCity,
      date: updatedDate,
    }

    fetch(`${API_URL}/${artistObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedArtistObject),
      headers: {"Content-Type": "application/json"}
    }).then(() => getArtists())

  }
  return (
    <div>
      <form className='form1'>
        <h3>Add New Artist</h3>
        <label>Name</label>
        <input
          onChange={(e) => setNewName(e.target.value)}
          name="name"
          type="text"
        ></input>

        <h3>Add New City</h3>
        <label>City</label>
        <input
          onChange={(e) => setNewCity(e.target.value)}
          name="city"
          type="text"
        ></input>

        <h3>Add New Date</h3>
        <label>Date</label>
        <input
          onChange={(e) => setNewDate(e.target.value)}
          name="date"
          type="text"
        ></input>

        <button onClick={(e) => postNewArtist(e)}>Submit</button>
      </form>
      <br></br> <br></br>

      <form className='form2'>
        <h3>Update Info</h3>
        <label>Artist Name</label>
        <input onChange={(e) =>
        setUpdatedName(e.target.value)}>
        </input>

        <h3>Update City</h3>
        <label>New City</label>
        <input onChange={(e) => setUpdatedCity(e.target.value)}></input>

        <h3>New Date</h3>
        <label>Date</label>
        <input onChange={(e) => setUpdatedDate(e.target.value)}></input>

        <button onClick={(e) => updateArtist(e, artists)}>Update</button>
      </form>
    </div>
  );
}
export default Form;
