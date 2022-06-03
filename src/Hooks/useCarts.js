import { useCallback, useState } from 'react';

const useCarts = (reducer, initState) => {
	const [cart, setState] = useState(initState);
	const dispatch = useCallback((action) => {
    const nextState = reducer(cart, action)
    setState(nextState)
  }, [setState, cart])

  return {cart, dispatch};
};

export default useCarts;