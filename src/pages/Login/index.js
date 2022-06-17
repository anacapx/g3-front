import { useState, useEffect } from 'react'
import useGlobal from "../../hooks/useGlobal";

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'
import toast from '../../helpers/toast'
import styles from '../../components/form/Form.module.css'
import './style.css';

import useRequestAuth from '../../hooks/useRequestAuth'

function Login() {
    const [adm, setAdm] = useState({});
    const { login } = useRequestAuth()
    const { setActualPage } = useGlobal();

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

    useEffect(() => {
        setActualPage("Login");
    }, [])

    return (
        <section className={styles.form_container}>
            <form onSubmit={handleSubmit}>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    handleOnChange={handleChange}
                />

                <input className='form_btn' type="submit" value="Entrar" />

            </form>

            <p>
                Não tem cadastro? <Link to="/admin" ><span className='p_span'>Registre-se</span></Link>
            </p>
        </section>
    )
}

export default Login;