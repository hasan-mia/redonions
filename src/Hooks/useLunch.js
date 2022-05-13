import { useEffect, useState } from 'react';

const useLunch = () => {
	const [lunches, setLaunches] = useState([])
	useEffect(() => {
		fetch('data/lunch.json')
			.then(res => res.json())
			.then(data => setLaunches(data))
	}, []);

	return {lunches, setLaunches};
};

export default useLunch;