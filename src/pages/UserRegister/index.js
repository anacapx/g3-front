import { useState, useContext } from 'react'

import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

function UserRegister() {

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
      <h1>Cadastro de Usuário</h1>
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
          text="CPF"
          type="number"
          name="cpf"
          placeholder=""
          handleOnChange={handleChange}
        />

        <Input
          text="Telefone"
          type="phone"
          name="phone"
          placeholder=""
          handleOnChange={handleChange}
        />

        <Input
          text="Data de nascimento"
          type="date"
          name="birthday"
          placeholder=""
          handleOnChange={handleChange}
        />

        <input type="submit" value="Salvar" />

      </form>

    </section>
  )
}

export default UserRegister;