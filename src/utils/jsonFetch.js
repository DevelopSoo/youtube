export default function fetchJson(setVideos) {
	return fetch('data.json',{
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then(response => response.json())
	.then(result => setVideos(result.items))
	.catch(error => console.log('error', error));
}