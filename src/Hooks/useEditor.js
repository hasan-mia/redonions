import { useEffect, useState } from "react"

const useEditor = (user) => {
    const [editor, setEditor] = useState(false)
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://redonions.herokuapp.com/editor/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `${email} ${localStorage.getItem('accessToken')}`
                }
            })
        .then((response) => response.json())
        .then((data) => setEditor(
        data, setIsLoad(false)));
    }
    }, [user])

    return {editor, isLoad, setIsLoad}
};

export default useEditor;