import { useState, useContext } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

import BigButton from '../../components/BigButton'

function Order() {

    return (
        <section >
            <h1>Pedidos</h1>

            <BigButton
                text="Cadastrar Pedido"
                link="/order/register"
            />

            <BigButton
                text="Listar Pedidos"
                link="/orders"
            />
        </section>
    )
}

export default Order;