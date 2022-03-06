import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Search from '../src/components/search/search';
// import fetchJson from './utils/jsonFetch';

function App({ youtube }) {  
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
      .then(videos => {console.log(videos); setVideos(videos)})
  }
  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos))
    // fetchJson(setVideos);
  }
, [])
  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <VideoList videos={videos}/>
    </div>
    
  );
}

export default App;
