import { useState, useContext } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

function Register() {

    const [user, setUser] = useState({});
    const { register } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Cadastro de Administrador</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder=""
                    handleOnChange={handleChange}
                />

                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder=""
                    handleOnChange={handleChange}
                />

                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder=""
                    handleOnChange={handleChange}
                />

                <Input
                    text="Confirme sua senha"
                    type="password"
                    name="confirmpassword"
                    placeholder=""
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Salvar" />

            </form>

            <p>
                Já tem cadastro? <Link to="/login" >Faça Login</Link>
            </p>
        </section>
    )
}

export default Register;