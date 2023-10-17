import React, { useEffect } from 'react'
import { useTable } from 'react-table';
import ArtistCard from './ArtistCard';

function Table({artists, setArtists, getArtists}) {
  const API_URL = "https://64f168df0e1e60602d23c0eb.mockapi.io/artists"


  function handleDelete (id) {

    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    }).then(() => getArtists())
  

    const filteredArtists = artists.id.filter(artist => artist.id !== id)
    setArtists(filteredArtists)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Picture</th>
          <th>City</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody> 
        {artists.map((artist,index) => (
          <tr>
            <td>{artist.name}</td>
            <td><img src={artist.picture}/></td>
            <td>{artist.city}</td>
            <td>{artist.date}</td>
            {/* finish the other td elements */}
            <td>
              <button onClick={() => handleDelete(artist.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>

  )
}

export default Table