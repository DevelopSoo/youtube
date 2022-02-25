import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Search from '../src/components/search/search';
import fetchJson from './utils/jsonFetch';

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
    fetchJson(setVideos);
  }
, [])
  return (
    <div className={styles.appHeader}>
      <Search setVideos={setVideos} />
      <VideoList videos={videos}/>
    </div>
    
  );
}

export default App;
