import { useState, useEffect } from 'react'

import useRequestOrder from '../../hooks/useRequestOrder'

function OrderList() {
    const [orders, setOrders] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { get } = useRequestOrder();

    useEffect(() => {
        const resp = get('/order', true).then((response) => {
            setOrders(response)
        })

    }, [token])

    return (
        <section>
            <h1>Lista de Pedidos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Id Pedido</th>
                            <th scope="col">Id Usuário</th>
                            <th scope="col">Nome Usuário</th>
                            <th scope="col">Produtos</th>
                            <th scope="col">Valor total</th>
                            <th scope="col">Data</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <th order="row">{order.id}</th>
                                <td>{order.user.id}</td>
                                <td>{order.user.name}</td>
                                <td>{order.products}</td>
                                <td>{order.value}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default OrderList