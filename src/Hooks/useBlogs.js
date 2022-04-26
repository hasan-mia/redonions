import React, { useState } from 'react';

const useBlogs = () => {
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		fetch('data/blogs.json')
			.then(res => res.json())
			.then(data => setLaunch(data))
	}, []);

	return [dinner, setBlogs];
};

export default useBlogs;