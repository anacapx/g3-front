import { useState, useContext } from 'react'

import useRequestsAuth from '../../hooks/useRequestAuth'

import toast from '../../helpers/toast'

import Input from '../../components/form/Input'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'



function AdmRegister() {
    const { post } = useRequestsAuth();
    const navigate = useNavigate()
    const [adm, setAdm] = useState({});
    
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

export default AdmRegister;