import React, { useState } from 'react';

const useDinner = () => {
	const [dinner, setDinners] = useState([])
	useEffect(() => {
		fetch('data/dinner.json')
			.then(res => res.json())
			.then(data => setLaunch(data))
	}, []);

	return [dinner, setDinners];
};

export default useDinner;