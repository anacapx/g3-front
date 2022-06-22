import { useNavigate } from 'react-router-dom'

import useGlobal from "./useGlobal";
import toast from "../helpers/toast";

export default function useRequestOrder() {
  const navigate = useNavigate()
  const { token } = useGlobal();

  async function post(route, body, withToken) {
    const config = withToken ? { Authorization: `Bearer ${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_ORDER_URL}${route}`,
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
        throw new Error( dataObj.length > 0 ? dataObj[0].errorMessage : dataObj.message);
      }

      return dataObj

    } catch (error) {
      toast.errorMsg(error.message);
    }
  }


  async function get(route, withToken) {
    const config = withToken ? { Authorization: `Bearer ${JSON.parse(token)}` } : {};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_ORDER_URL}${route}`,
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
        throw new Error(dataObj);
      }

      return dataObj

    } catch (error) {
      toast.errorMsg(error.message.errorMessage)

    }
  }


  return {
    post,
    get
  }

}

