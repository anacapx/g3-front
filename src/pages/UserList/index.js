import { useState, useContext, useEffect } from 'react'

import Input from '../../components/form/Input'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

//import { Context } from '../../context/AuthContext'
import useGlobal from "../../hooks/useGlobal";

import apiUser from '../../utils/apiUser'

import toast from '../../helpers/toast'
import useRequestUser from '../../hooks/useRequestUser'


function UserList() {
    const [users, setUsers] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { userId, setUserId, removeUserId } = useGlobal();
    const navigate = useNavigate()
    const { get, del } = useRequestUser();

    useEffect(() => {
        const resp = get('/user', true).then((response) => {
            setUsers(response)
        })
    }, [token])

    async function deleteUser(id) {
        const data = await del('/user', id, true)
        if(data){
            toast.successMsg("Usuário deletado com sucesso.")
            const resp = get('/user', true).then((response) => {
                setUsers(response)
            })
        }
    }

    function makeOrder(userId) {
        setUserId(userId)
        navigate("/order/register")
    }

    return (
        <section>
            <h1>Lista de Usuários</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Data de Nascimento</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.cpf}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.birthday}</td>
                                <td>
                                    <button onClick={() => { deleteUser(user.id) }}>Excluir</button>
                                    <button >Alterar</button>
                                    <button onClick={() => { makeOrder(user.id) }}>Fazer pedido</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default UserList