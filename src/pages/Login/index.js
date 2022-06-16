import { useState } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'
import toast from '../../helpers/toast'
import styles from '../../components/form/Form.module.css'
import './style.css';

import useRequestAuth from '../../hooks/useRequestAuth'

function Login() {
    const [adm, setAdm] = useState({});
    const { login } = useRequestAuth()

    function handleChange(e) {
        setAdm({ ...adm, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        loginAdm(adm)
    }

    async function loginAdm(adm) {
        if (!adm.email || !adm.password) {
            return toast.errorMsg("Preencha todos os campos.")
        }
        await login(adm, false)
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

                <input type="submit" value="Entrar" />

            </form>

            <p>
                Não tem cadastro? <Link to="/admin" ><span className='p_span'>Registre-se</span></Link>
            </p>
        </section>
    )
}

export default Login;