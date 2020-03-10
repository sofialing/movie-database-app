import React from 'react'
import axios from 'axios'

const MovieDetails = ({ details }) => {
	return (
		<ul>
			{details.map((item, i) => (
				<li key={i}>
					<h3>{item.type}</h3>
					<span>{item.info}</span>
				</li>
			))}
		</ul>
	)
}

export default MovieDetails
