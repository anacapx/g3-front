import { useState, useEffect } from 'react'

import useRequestsAuth from '../../hooks/useRequestAuth'
import useGlobal from "../../hooks/useGlobal";

import toast from '../../helpers/toast'

import Input from '../../components/form/Input'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'



function AdmRegister() {
    const { post } = useRequestsAuth();
    const navigate = useNavigate()
    const [adm, setAdm] = useState({});
    const { setActualPage } = useGlobal();
    
    useEffect(() => {
        setActualPage("Cadastro de Administrador");
    }, [])

    function handleChange(e) {
        setAdm({ ...adm, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        AddAdm(adm)
    }

    async function AddAdm(adm) {
        if (!adm.name || !adm.email || !adm.password || !adm.confirmpassword) {
            return toast.errorMsg("Preencha todos os campos")
        }

        if (adm.password !== adm.confirmpassword) {
            return toast.errorMsg("Os campos de Senha e Confirmação de senha devem ser iguais")
        }

        const resp = await post("/admin", adm, false)

        if (resp) {
          navigate("/login");
          toast.successMsg("Administrador cadastrado com sucesso");
        }  
    }

    return (
        <section className={styles.form_container}>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    handleOnChange={handleChange}
                />

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

                <Input
                    text="Confirme sua senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme sua senha"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Salvar" />

            </form>

            <p>
                Já tem cadastro? <Link to="/login"><span className='p_span'>Faça Login</span></Link>
            </p>
        </section>
    )
}

export default AdmRegister;