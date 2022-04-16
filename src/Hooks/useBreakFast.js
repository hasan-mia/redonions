import { useEffect, useState } from "react";

const useBreakFast = () => {
	const [breakfasts, setBreakfasts] = useState([])
	useEffect(()=>{
		fetch('data/breakfast.json')
		.then(res => res.json())
		.then(data => setBreakfasts(data))
	}, []);
	
	return [breakfasts, setBreakfasts];
};

export default useBreakFast;