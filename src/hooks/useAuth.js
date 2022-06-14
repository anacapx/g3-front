// import apiAuth from '../utils/apiAuth'

// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// import toast from '../helpers/toast'

// export default function useAuth() {
//     const [authenticated, setAuthenticated] = useState(false)
//     const navigate = useNavigate()

//     useEffect(() => {
//         const token = localStorage.getItem('token')

//         if (token) {
//             apiAuth.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
//             setAuthenticated(true)
//         }
//     }, [])

//     async function register(admin) {

//         try {
//             const data = await apiAuth.post('/admin', admin).then((response) => {
//                 return response.data
//             })

//             //await authUser(data)

//             toast.success("Administrador cadastrado com sucesso!")

//         } catch (error) {
//             toast.error(error.response.data)
//             console.log(error.response.data)
//         }
//     }

//     async function authUser(data) {
//         setAuthenticated(true)
//         localStorage.setItem('token', JSON.stringify(data.token))
//         navigate('/orders')


//     }

//     async function login(admin) {
//         try {
//             const data = await apiAuth.post('/login', admin).then((response) => {
//                 return response.data
//             })

//             await authUser(data)

//             toast.successMsg("Bem-vindo(a)!")

//         } catch (error) {
//             toast.error(error.response.data)
//             console.log(error.response.data)
//         }
//     }

//     async function logout(){
//         toast.success("Até a próxima!")

//         setAuthenticated(false)
//         localStorage.removeItem('token')
//         //api.defaults.headers.Authorization = undefined
//         navigate('/login')

//     }

//     return { authenticated, register, login, logout }
// }