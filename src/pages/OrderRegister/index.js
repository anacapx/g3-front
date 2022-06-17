import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobal from "../../hooks/useGlobal";
import Input from '../../components/form/Input'

import toast from '../../helpers/toast'
import styles from '../../components/form/Form.module.css'

import useRequestOrder from '../../hooks/useRequestOrder'

function OrderRegister() {

  useEffect(() => {
    setActualPage("Cadastro de Pedidos");
}, [])

  const { userId, setUserId, removeUserId, setActualPage } = useGlobal();

  const { post } = useRequestOrder();
  const navigate = useNavigate()

  const [order, setOrder] = useState({userId: userId});

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    AddOrder(order)
  }
  
  async function AddOrder(order){
    if(!order.value || !order.products){
      return toast.errorMsg("Preencha todos os campos.")
    }
    
    const resp = await post('/order', order, true)

    if (resp) {
      navigate("/orders");
      toast.successMsg("Pedido cadastrado com sucesso");
      setUserId()
    }  

  }

  return (
    <section className={styles.form_container}>
      <form onSubmit={handleSubmit}>

      <Input
          text="Id do Usuário"
          type="number"
          name="userId"
          value={userId}
          handleOnChange={handleChange}
        />

        <Input
          text="Valor total"
          type="number"
          name="value"
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