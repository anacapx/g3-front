import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Navbar.module.css'

import logo from '../../assets/order-preto.png'

import { Context } from '../../context/AuthContext'

function Navbar() {
  const { authenticated, logout } = useContext(Context)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={logo} alt="Kimchi" />
        <h2>Kimchi</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/page">Usuários</Link>
        </li>
        <li>
          <Link to="/order/page">Pedidos</Link>
        </li>

        {authenticated ? (
          <li className={styles.pointer} onClick={logout}> Logout</li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin">Registre-se</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar