import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import useRequestUser from '../../hooks/useRequestUser'

import toast from '../../helpers/toast'

import UserForm from '../../components/form/UserForm'
import formStyles from '../../components/form/Form.module.css'

function UserRegister() {
  const { post} = useRequestUser();
  const navigate = useNavigate()

  const [user, setUser] = useState({});

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    AddUser(user)
  }

  async function AddUser(user) {
    const formData = new FormData

    await Object.keys(user).forEach((key) => {
      formData.append(key, user[key])
    })

    if(!user.name || !user.email || !user.cpf || !user.phone || !user.birthday){
      return toast.errorMsg("Preencha todos os campos.")
    }

    const resp = await post('/user', user, true)

    if (resp) {
      navigate("/users");
      toast.successMsg("Usuário cadastrado com sucesso");
    }  
  }

  return (
    <section className={formStyles.form_container}>
      <h1>Cadastro de Usuário</h1>
      <UserForm
        handleSubmit={AddUser}
        userData=''
        btnText='Salvar Usuário'
      />

    </section>
  )
}

export default UserRegister;