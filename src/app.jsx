import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    // fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCi9UHDJMNpBoQZLrFiYqszOkWSNtgPKBY", requestOptions)
    //   .then(response => response.json())
    //   .then(result => setVideos(result.items))
    //   .catch(error => console.log('error', error));
    fetch('data.json',{ // https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app -> fetch!!
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
    // setVideos(data.items)

  }
, [])
console.log('videos: ', videos)
  return (
    <VideoList videos={videos}/>
  );
}

export default App;
