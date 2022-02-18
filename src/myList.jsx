import React, { useEffect, useState } from 'react'

export default function MyList() {
	const [list, setList] = useState([])

	// useEffect(() =>
	// 	fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyCi9UHDJMNpBoQZLrFiYqszOkWSNtgPKBY", {
	// 		method: 'GET'
	// 	})
	// 	.then(res => res.json())
	// 	.then(myJson => setList(myJson.items))
	// , [])
	
	
	return (
		<ul>
			{
				list.map(v => (
					<li key={v.id.videoId}>{v.snippet.channelTitle}</li>
				))
			}
		</ul>
	)
}
