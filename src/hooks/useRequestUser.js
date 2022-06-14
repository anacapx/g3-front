import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import useGlobal from "./useGlobal";
import toast from "../helpers/toast";

export default function useRequestUser() {
  const navigate = useNavigate()
  const { token } = useGlobal();

  async function post(route, body, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_USER_URL}${route}`,
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
        throw new Error(dataObj.message);
      }

      return dataObj

    } catch (error) {
      toast.errorMsg(error.message)
    }
  }


  async function get(route, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_USER_URL}${route}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: null,
        }
      )
      const dataObj = await response.json();

      if (!response.ok) {
        throw new Error(dataObj.message);
      }

      return dataObj

    } catch (error) {
      toast.errorMsg(error.message)

    }
  }

  async function del(route, id, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};
    try {
      const response = await fetch(`${process.env.REACT_APP_API_USER_URL}${route}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: null,
        }
      )
      if (!response.ok) {
        const dataObj = await response.json();
        throw new Error(dataObj);
      }
      return response
    } catch (error) {
      toast.errorMsg(error.message)
    }
  }

  async function update(route, body, id, withToken) {
    const config = withToken ? { Authorization: `${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_USER_URL}${route}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...config,
          },
          body: JSON.stringify(body),
        }
      )
      
      if (!response.ok) {
        const dataObj = await response.json();
        throw new Error(dataObj.message);
      }
      
      return response
      
    } catch (error) {
      toast.errorMsg(error.message)
    }
  }


  return {
    post,
    get,
    del,
    update
  }

}

