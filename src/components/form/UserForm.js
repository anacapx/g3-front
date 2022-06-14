import { useState, useContext } from 'react'

import formStyles from '../../components/form/Form.module.css'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'


//import { Context } from '../../context/AuthContext'

function UserForm({ handleSubmit, userData, btnText }) {

    const [user, setUser] = useState(userData || {});
    //const { register } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(user)
    }

    return (
        <form onSubmit={submit} className={formStyles.form_container}>
            <Input
                text="Nome"
                type="text"
                name="name"
                placeholder=""
                handleOnChange={handleChange}
                value={user.name || ''}
            />

            <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder=""
                handleOnChange={handleChange}
                value={user.email || ''}
            />

            <Input
                text="CPF"
                type="number"
                name="cpf"
                placeholder=""
                handleOnChange={handleChange}
                value={user.cpf || ''}
            />

            <Input
                text="Telefone"
                type="phone"
                name="phone"
                placeholder=""
                handleOnChange={handleChange}
                value={user.phone || ''}
            />

            <Input
                text="Data de nascimento"
                type="date"
                name="birthday"
                placeholder=""
                handleOnChange={handleChange}
                value={user.birthday || ''}
            />

            <input type="submit" value={btnText} />

        </form>
    )
}

export default UserForm;