import React from 'react';
import VideoItem from '../video_item/video_ltem';
import styles from './video_list.module.css';

const VideoList = ({videos}) => (
			<ul className={styles.videos}>
				{videos.map(video => (
					<VideoItem key={video.id.videoId} video={video} />
				))}
			</ul>
	);

export default VideoList;