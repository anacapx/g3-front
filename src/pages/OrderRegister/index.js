import { useState, useContext } from 'react'

import Input from '../../components/form/Input'

import styles from '../../components/form/Form.module.css'

import { Context } from '../../context/AuthContext'

function OrderRegister() {

  const [order, setOrder] = useState({});
  const { register } = useContext(Context)

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    register(order)
  }

  return (
    <section className={styles.form_container}>
      <h1>Cadastro de Pedido</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Valor total"
          type="number"
          name="total"
          placeholder=""
          handleOnChange={handleChange}
        />

        <Input
          text="Produtos"
          type="text"
          name="products"
          placeholder=""
          handleOnChange={handleChange}
        />

        <input type="submit" value="Salvar" />

      </form>

    </section>
  )
}

export default OrderRegister;