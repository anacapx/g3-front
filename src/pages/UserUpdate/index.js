import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import useRequestUser from '../../hooks/useRequestUser'
import useGlobal from "../../hooks/useGlobal";

import toast from '../../helpers/toast'

import UserForm from '../../components/form/UserForm'
import formStyles from '../../components/form/Form.module.css'

function UserUpdate() {
    const { userId, setUserId, userGlobal, setUserGlobal } = useGlobal();
    const { update } = useRequestUser();
    const navigate = useNavigate()

    const [user, setUser] = useState(userGlobal);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateUser(user)
    }

    async function updateUser(user) {

        if (!user.name || !user.email || !user.cpf || !user.phone || !user.birthday) {
            return toast.errorMsg("Preencha todos os campos.")
        }

        const resp = await update('/user', user, user.id, true)

        if (resp) {
            navigate("/users");
            toast.successMsg("Usuário alterado com sucesso");
        }
    }

    return (
        <section className={formStyles.form_container}>
            <h1>Alteração de Usuário</h1>
            <UserForm
                handleSubmit={updateUser}
                userData={user}
                btnText='Salvar Usuário'
            />

        </section>
    )
}

export default UserUpdate;