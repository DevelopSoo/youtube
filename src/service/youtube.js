class Youtube {
	constructor(key) {
		this.key = key;
		this.getRequestOption = {
			method: 'GET',
      redirect: 'follow'
		}
	}

	async mostPopular() {
		try {
			const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=25&chart=mostPopular&key=${this.key}`,
				this.getRequestOption
			);
			const result_1 = await response.json();
			return result_1.items;
		} catch (error) {
			return console.log('error', error);
		}
	}

	async search(query) {
		console.log('query: ', query)
		try {
			const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`,
				this.getRequestOption
			);
			const result_1 = await response.json();
			return result_1.items.map(item => ({ ...item, id: item.id }));
		} catch (error) {
			return console.log('error', error);
		}
	}
}

export default Youtube
