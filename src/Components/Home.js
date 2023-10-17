import React from 'react';
import {useEffect} from 'react'
import ArtistCard from './ArtistCard'

export default function Home({artists}) {
	const showArtists = artists.map((artist)=>
	<ArtistCard artist ={artist}/>)

		return (
			<div className="display">
				<h2 className="Heading">MuseScape</h2>
				{showArtists}
			</div>
		)
	
}

