import React from 'react';
import styles from './video_item.module.css';

// const VideoItem = (props) => (
// 			<li className={styles.videoItem}>
// 				<img className='videoImage' src={props.thumbnails} alt="?"/>
// 				<div className={styles.videoDesc}>
// 					<h4 className='videoTitle'>{props.title}</h4>
// 					<p className={styles.videoChannelTitle}>{props.channelTitle}</p>
// 				</div>
// 			</li>
// 	);

const VideoItem = ({ video: { snippet } }) => {
	return (
		<li className={styles.container}>
			<div className={styles.video}>
				<img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
				<div className={styles.metadata}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.channel}>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	)

}
export default VideoItem;