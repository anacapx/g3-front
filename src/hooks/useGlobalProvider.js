/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import toast from "../helpers/toast";


function useGlobalProvider() {
    const navigate = useNavigate()
    const [token, setToken, removeToken] = useState(localStorage.getItem('token') || '')
    const [authenticated, setAuthenticated] = useState(false)
    const [userId, setUserId, removeUserId] = useState()
    const [loggedAdm, setloggedAdm, removeloggedAdm] = useState()

    const apiURL = {
        user: process.env.REACT_APP_API_USER_URL,
        auth: process.env.REACT_APP_API_AUTH_URL,
        order: process.env.REACT_APP_API_ORDER_URL
    }

    useEffect(() => {

        const token = localStorage.getItem('token')
        

        if (token) {
           // api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
            //navigate("/orders")

        } 
        // else if (path === "/login" || path === "/admin") {
        //     setToken(undefined);
        // }
    }, [])

    async function logout(){
        toast.successMsg("Até a próxima!")
        setAuthenticated(false)
        localStorage.removeItem('token')
        navigate('/login')
    }



    return {
        token,
        authenticated, 
        setAuthenticated,
        logout,
        apiURL,
        userId, 
        setUserId, 
        removeUserId
    }

}

export default useGlobalProvider;