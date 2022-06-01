import{ useEffect, useState } from 'react';

const useBlogs = () => {
	const [blogs, setBlogs] = useState([])
	const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('http://localhost:5000/blogs')
			.then(res => res.json())
			.then(data => setBlogs(data, setIsLoad(false)))
	}, [isLoad]);

	return {blogs, setBlogs, isLoad, setIsLoad};
};

export default useBlogs;