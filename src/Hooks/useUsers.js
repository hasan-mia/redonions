import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useUsers = (url) => {
    const [user]=useAuthState(auth)
    const [userlist, setUserList] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        fetch(`${url}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        })
        .then((response) => response.json())
        .then((data) => setUserList(
        data, setIsLoad(false)));
    }, [isLoad])

    return [userlist, isLoad]
};

export default useUsers;