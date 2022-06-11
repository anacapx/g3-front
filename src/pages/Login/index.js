import { useState, useContext } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

function Login() {

    const [adm, setAdm] = useState({});
    const { login } = useContext(Context)

    function handleChange(e) {
        setAdm({ ...adm, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(adm)
    }

    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

                <input type="submit" value="Enviar" />

            </form>

            <p>
                Não tem cadastro? <Link to="/admin" >Registre-se</Link>
            </p>
        </section>
    )
}

export default Login;