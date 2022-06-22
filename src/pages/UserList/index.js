import { useState, useContext, useEffect } from 'react'
import { format } from 'date-fns';

import Input from '../../components/form/Input'
import { Link, useNavigate } from 'react-router-dom'

import './style.css'

//import { Context } from '../../context/AuthContext'
import useGlobal from "../../hooks/useGlobal";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import apiUser from '../../utils/apiUser'

import toast from '../../helpers/toast'
import useRequestUser from '../../hooks/useRequestUser'


function UserList() {
    const [users, setUsers] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { userId, setUserId, userGlobal, setUserGlobal, setActualPage } = useGlobal();
    const navigate = useNavigate()
    const { get, del } = useRequestUser();

        const [itensPerPage] = useState(12);
        const [currentPage, setCurrentPage] = useState(0);

        const pages = Math.ceil(users.length / itensPerPage);
        const starIndex = currentPage * itensPerPage;
        const endIndex = starIndex + itensPerPage;
        const currentUsers = users.slice(starIndex, endIndex);

        const goBack = () => {
            if (currentPage === 0) {
            return;
            };
            setCurrentPage(currentPage - 1);
        };
        
        const passPage = () => {
        if (currentPage === pages - 1) {
            return;
        };
        setCurrentPage(currentPage + 1);
        };

    useEffect(() => {
        const resp = get('/user?page=0&size=100', true).then((response) => {
            setUsers(response)
        })
    }, [token])

    useEffect(() => {
        setActualPage("Lista de Clientes")
    }, [])

    async function deleteUser(id) {
        const data = await del('/user', id, true)
        if (data) {
            toast.successMsg("Clientes deletado com sucesso.")
            const resp = get('/user?page=0&size=100', true).then((response) => {
                setUsers(response)
            })
        }
    }

    async function updateUser(u) {
        setUserGlobal(u)
        navigate("/user/update")

    }

    function makeOrder(userId) {
        setUserId(userId)
        navigate("/order/register")
    }

    return (
        <section className='section_users'>
            <div>
                <table className='table'>
                    <thead>
                        <tr className='table_head'>
                            <th className= 'table_id_th' scope="col">Id</th>
                            <th className='table_th' scope="col">Nome</th>
                            <th className='table_th' scope="col">CPF</th>
                            <th className='table_th' scope="col">Telefone</th>
                            <th className='table_th' scope="col">Email</th>
                            <th className='table_th' scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers ? currentUsers.map(u => (
                            <tr key={u.id}>
                                <th className='table_td table_id' scope="row">{u.id}</th>
                                <td className='table_th table_td'>{u.name}</td>
                                <td className='table_th table_td'>{`${(u.cpf).slice(0, 3)} ${(u.cpf).slice(3, 6)} ${(u.cpf).slice(6, 9)} ${(u.cpf).slice(9)}`}</td>
                                <td className='table_th table_td'>{`${(u.phone).slice(0, 2)} ${(u.phone).slice(2, 3)} ${(u.phone).slice(3, 7)} ${(u.phone).slice(7)}`}</td>
                                <td className='table_th table_td'>{u.email}</td>

                                <td className='table_th table_td'>
                                    <button className='table_btn' onClick={() => { deleteUser(u.id) }}>Excluir</button>
                                    <button className='table_btn' onClick={() => { updateUser(u) }}>Alterar</button>
                                    <button className='table_btn' onClick={() => { makeOrder(u.id) }}>Fazer pedido</button>
                                </td>
                            </tr>
                        )) : ""}
                    </tbody>
                </table>
            </div>
            <div className="pagination_buttons">
                <button
                onClick={goBack}
                className="page-btn"
                >
                    <BsArrowLeftCircle className={currentPage === 0 ? "arrow-icon-inactive" : "arrow-icon-active"} />
                </button>
                <span className="page-span">
                    {currentPage + 1} / {pages}
                </span>
                <button
                onClick={passPage}
                className="page-btn"
                >
                    <BsArrowRightCircle className={currentPage === pages - 1 ? "arrow-icon-inactive" : "arrow-icon-active"} />
                </button>
            </div>
        </section>
    )
}

export default UserList