import React, { useState, useCallback } from 'react';
import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faMicrophone, 
	faMagnifyingGlass, 
	faBars, 
	faBell,
	faCircleUser
} from '@fortawesome/free-solid-svg-icons'


const Search = (props) => {
	const [searchInput, setSearchInput] = useState('');
  const handleInput = useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);
  }, [searchInput]);

	const onSearch = useCallback(() => {
		const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
		console.log('searchInput: ', searchInput)
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&key=AIzaSyCi9UHDJMNpBoQZLrFiYqszOkWSNtgPKBY`, requestOptions)
      .then(response => response.json())
      .then(result => props.setVideos(result.items))
      .catch(error => console.log('error', error));
	}, [searchInput]);

	return (
		<header className={styles.header}>
			<div className={styles.navFirst}>
				<div className={styles.navBar}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				
				<div className={styles.youtubeLogo}>
					<img className={styles.youtubeImg} src="/images/logo.png" alt="youtube logo" />
					<h2>Youtube</h2>
				</div>
			</div>
			
			<div className={styles.navSecond}>
				<input className={styles.searchInput} placeholder="검색" type="text" onChange={handleInput}/>
				<button onClick={onSearch} className={styles.searchBtn}>
					<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
				</button>

				<button className={styles.audioBtn}>
				<FontAwesomeIcon icon={faMicrophone} className={styles.searchAudio} />
				</button>
			</div>
			
			<div className={styles.navThird}>
				<button className={styles.alarm}>
					<FontAwesomeIcon icon={faBell} />
				</button>
				<button className={styles.user}>
					<FontAwesomeIcon icon={faCircleUser} />
				</button>
				
			</div>

			
			
		</header>
	);
}
	
export default Search;