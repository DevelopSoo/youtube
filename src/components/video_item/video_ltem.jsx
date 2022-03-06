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

const VideoItem = ({ video: { snippet, statistics } }) => {
	return (
		<li className={styles.container}>
			<div className={styles.video}>
				<img className={styles.thumbnail} src={snippet.thumbnails.high.url} alt="video thumbnail" />
				<div className={styles.metadata}>
					<div className={styles.profileLogo}>
						<a href="#">
							<img src={snippet.thumbnails.default.url} className={styles.profileLogoImg} alt="" />
						</a>
					</div>
					<div className={styles.description}>
						<h4 className={styles.title}>{snippet.title}</h4>
						<p className={styles.channel}>{snippet.channelTitle}</p>
						{/* <p>조회 수: {statistics.viewCount}</p>
						<p>좋아요 수: {statistics.likeCount}</p> */}
					</div>
				</div>
			</div>
		</li>
	)

}
export default VideoItem;