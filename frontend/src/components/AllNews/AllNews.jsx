import {useContext, useEffect} from 'react'
import AuthContext from '../../contexts/AuthContext';


function AllNews () {

    const {token, profile, handleLogin, handleLogout} = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:7070/private/me', {
            Authorization: `Bearer${token}`
        })
    }, []);

    return (
        <>
        </>
    )
}


export default AllNews;