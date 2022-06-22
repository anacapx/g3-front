import { useState, useContext } from 'react'

import formStyles from '../../components/form/Form.module.css'

import Input from '../../components/form/Input'

function UserForm({ handleSubmit, userData, btnText }) {

    const [user, setUser] = useState(userData || {});

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
                placeholder="Nome"
                handleOnChange={handleChange}
                value={user.name || ''}
            />

            <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder="E-mail"
                handleOnChange={handleChange}
                value={user.email || ''}
            />

            <Input
                text="CPF"
                type="number"
                name="cpf"
                placeholder="CPF"
                handleOnChange={handleChange}
                value={user.cpf || ''}
            />

            <Input
                text="Telefone"
                type="phone"
                name="phone"
                placeholder="Telefone"
                handleOnChange={handleChange}
                value={user.phone || ''}
            />

            <Input
                text="Data de nascimento"
                type="date"
                name="birthday"
                placeholder="Data de nascimento"
                handleOnChange={handleChange}
                value={user.birthday || ''}
            />

            <input type="submit" value={btnText} />

        </form>
    )
}

export default UserForm;