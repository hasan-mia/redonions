import React, { useState } from 'react';

const useLaunch = () => {
	const [lunches, setLaunches] = useState([])
	useEffect(() => {
		fetch('data/lunch.json')
			.then(res => res.json())
			.then(data => setLaunch(data))
	}, []);

	return [lunches, setLaunches];
};

export default useLaunch;