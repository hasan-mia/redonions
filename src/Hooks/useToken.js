import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');

    useEffect( () =>{
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {email: email, name: name};
        if(email){
            fetch(`https://redonion.onrender.com/signin/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;