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
        const [token] = useState(localStorage.getItem('token') || '')
        const { get } = useRequestOrder();
        const { getOne } = useRequestUser();
        const { setActualPage, usersList, setUsersList } = useGlobal();

        const [itensPerPage] = useState(10);
        const [currentPage, setCurrentPage] = useState(0);

        const pages = Math.ceil(orders.length / itensPerPage);
        const starIndex = currentPage * itensPerPage;
        const endIndex = starIndex + itensPerPage;
        const currentOrders = orders.slice(starIndex, endIndex);

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

        // Retornar nome do usuário, socorro Deus
        // useEffect(() => {
        //     orders.map((order) => {
        //         const resp = get('user', order.userId, true).then((response) => {
        //             setUsersList(() => {
        //                 const newList = [...usersList];
        //                 return [...newList, response]
        //             });
        //         })
        //     })
        // }, [orders]);


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
                                        onClick={() => setOpenModal(true)}
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
                {openModal && (
                    <div className='backdrop'>
                        <div className='user-modal'>
                            <div className="use-modal_header">
                                <h1>Detalhes do Cliente</h1>
                                <AiOutlineCloseCircle className="close" onClick={() => setOpenModal(false)} alt="Ícone fechar" />
                            </div>

                        </div>
                    </div>
                )}
            </section>
        )
    }

    export default OrderList