    import { useEffect, useState } from 'react';
    import useGlobal from "../../hooks/useGlobal";
    import { format } from 'date-fns';
    import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
    import { AiOutlineCloseCircle } from "react-icons/ai"


    import useRequestOrder from '../../hooks/useRequestOrder';
    import useRequestUser from '../../hooks/useRequestUser';

    import './style.css'

    function OrderList() {
        const [orders, setOrders] = useState([])
        const [openModal, setOpenModal] = useState(false)
        const [user, setUser] = useState()
        const [token] = useState(localStorage.getItem('token') || '')
        const { get } = useRequestOrder();
        const { getOne } = useRequestUser();
        const { setActualPage, usersList } = useGlobal();

        const [itensPerPage] = useState(10);
        const [currentPage, setCurrentPage] = useState(0);

        const pages = Math.ceil(orders.length / itensPerPage);
        const starIndex = currentPage * itensPerPage;
        const endIndex = starIndex + itensPerPage;
        const currentOrders = orders.slice(starIndex, endIndex);

        const getUser = (userId) => {
            const resp = getOne('/user', userId, true).then((response) => {
                console.log("usuario: ", response);
                setUser(response)
                setOpenModal(true);
            })
        }

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
            const resp = get('/order?page=0&size=100', true).then((response) => {
                setOrders(response)
            })
        }, [token])

        let i = 0;
        useEffect(() => {
            setActualPage("Lista de Pedidos");
        }, [])

        return (
            <section className='section_orders'>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='table_id_th' scope="col" onClick={() => console.log("aqui: ", usersList)}>Pedido</th>
                                <th className='table_th' scope="col">Cliente</th>
                                <th className='table_th' scope="col">Produtos</th>
                                <th className='table_th' scope="col">Valor total</th>
                                <th className='table_th' scope="col">Data de criação</th>
                                <th className='table_th' scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders ? currentOrders.map(order => 
                                (
                                <tr key={order.id}>
                                    <th className='table_id' order="row">{order.id}</th>
                                    <td 
                                        className='table_th table_td user_td'
                                        onClick={() => {
                                            getUser(order.userId);
                                        }}
                                    >
                                        {order.userId}
                                    </td>
                                    <td className='table_th table_td'>{order.products}</td>
                                    <td className='table_th table_td'>{order.value.toLocaleString("pt-BR", {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}</td>
                                    <td className='table_th table_td'>{format(Number(new Date(order.date.slice(0, -6))), "dd/MM/yyyy")}</td>
                                    {/* <td className='table_th table_td'>{order.date}</td> */}
                                    <td className='table_th table_td'>
                                        <span className={order.status === "PENDING" ? 'order_status pending-status' : 'order_status created-status'}>{order.status}</span>
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
                {openModal && user ? (
                    <div className='backdrop'>
                        <div className='user-modal'>
                            <div className="user-modal_header">
                                <h1>Detalhes do cliente</h1>
                                <AiOutlineCloseCircle className="close" onClick={() => setOpenModal(false)} alt="Ícone fechar" />
                            </div>
                            <div className='user-modal_info'>
                                <span><b>Id:</b><br/> {user.id ? user.id : ""}</span>
                                <span><b>Nome:</b><br/> {user.name ? user.name : ""}</span>
                                <span><b>Email:</b><br/> {user.email ? user.email : ""}</span>
                                <span><b>Telefone:</b><br/> {user.phone ? `${(user.phone).slice(0, 2)} ${(user.phone).slice(2, 3)} ${(user.phone).slice(3, 7)} ${(user.phone).slice(7)}` : ""}</span>
                                <span><b>CPF:</b><br/> {user.cpf ? `${(user.cpf).slice(0, 3)} ${(user.cpf).slice(3, 6)} ${(user.cpf).slice(6, 9)} ${(user.cpf).slice(9)}` : ""}</span>
                                <span><b>Data de Nascimento:</b><br/> {user.birthday ? `${user.birthday.slice(-2)}/${user.birthday.slice(-5, -3)}/${user.birthday.slice(0, 4)}` : ""}</span>
                            </div>

                        </div>
                    </div>
                ) : ""}
            </section>
        )
    }

    export default OrderList