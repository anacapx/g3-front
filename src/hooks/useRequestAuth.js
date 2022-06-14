import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import useGlobal from "./useGlobal";
import toast from "../helpers/toast";

export default function useRequestAuth() {
  const navigate = useNavigate()
  const { token, setAuthenticated } = useGlobal();

  async function authUser(data) {
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))
  }

  async function login(body, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_AUTH_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: JSON.stringify(body),
        }
      )
      
      const dataObj = await response.json();
      
      if (!response.ok) {
        throw new Error(dataObj);
      }

      navigate("/")
      await authUser(dataObj)
      toast.successMsg("Bem-vindo(a)!")
      return dataObj

    } catch (error) {
      toast.errorMsg("E-mail ou senha incorretos")
    }
  }

  async function post(route, body, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_AUTH_URL}${route}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: JSON.stringify(body),
        }
      )
      
      const dataObj = await response.json();
      
      if (!response.ok) {
        throw new Error(dataObj);
      }

      return dataObj

    } catch (error) {
      toast.errorMsg(error.message)
    }
  }


  async function get(route, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_AUTH_URL}${route}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: null,
        }
      );
      const dataObj = await response.json();
      if (!response.ok) {
        throw new Error(dataObj);
      }
      return dataObj;
    } catch (error) {
      console.log(error);
      toast.errorMsg(error.message);
    }
  }

  return {
    post,
    login,
    get
  }
}

