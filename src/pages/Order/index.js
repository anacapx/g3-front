import { useState, useContext, useEffect } from 'react'

import useGlobal from "../../hooks/useGlobal";

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

import BigButton from '../../components/BigButton'

function Order() {

    const { setActualPage } = useGlobal();

    useEffect(() => {
        setActualPage("Pedidos");
    }, [])

    return (
        <section >
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