import { useEffect, useState } from "react"
const useProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('https://redonions.herokuapp.com/products')
		.then((res) => res.json())
        .then((data) => setProducts(
        data, setIsLoad(false)));
    }, [isLoad])

    return {products, setProducts, isLoad, setIsLoad}
};

export default useProducts;