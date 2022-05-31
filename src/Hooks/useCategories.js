import { useEffect, useState } from "react"

const useCategories = () => {
    const [categories, setCategories] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
        .then((response) => response.json())
        .then((data) => setCategories(
        data, setIsLoad(false)));
    }, [isLoad])

    return {categories, setCategories, isLoad, setIsLoad}
};

export default useCategories;