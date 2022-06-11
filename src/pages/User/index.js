import { useState, useContext } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

import BigButton from '../../components/BigButton'

function User() {

    return (
        <section >
            <h1>Usuários</h1>

            <BigButton
                text="Cadastrar Usuário"
                link="/user/register"
            />

            <BigButton
                text="Listar Usuários"
                link="/users"
            />

            <BigButton
                text="Buscar Usuários"
                link="/user/search"
            />

        </section>
    )
}

export default User;