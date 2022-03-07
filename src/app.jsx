import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Search from '../src/components/search/search';
import VideoDetail from './components/video_detail/video_detail';
// import fetchJson from './utils/jsonFetch';

function App({ youtube }) {  
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
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
      <section className={styles.content}>
      {selectedVideo && 
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      }
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
      </div>
      </section>
      
    </div>
    
  );
}

export default App;
