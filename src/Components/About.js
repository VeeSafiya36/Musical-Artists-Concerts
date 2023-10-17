import React from 'react';
import Table from './Table';
import ArtistCard from './ArtistCard';
import Form from './Form';


export default function About({artists,getArtists,updateArtist,postNewArtist}) {
	
		return ( 
		<div>
		
		<h2 className="Heading">Concerts Near You</h2>
		<Table artists={artists} getArtists={getArtists}/>

		<Form artists={artists} postNewArtist={postNewArtist} updateArtist={updateArtist} getArtists={getArtists}/>
		</div>
		)
}


