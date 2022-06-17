import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Navbar.module.css'

import logo from '../../assets/kimchi-logo.png'

import useGlobal from "../../hooks/useGlobal";

function Navbar() {
  const { authenticated, logout } = useGlobal();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={logo} alt="Kimchi" />
        <span>Kimchi</span>
      </div>
      <ul>
        {authenticated ? (
          <>
            <li>
              <Link to="/">Home</Link>
          </li>
            <li>
              <Link to="/user/page">Usuários</Link>
            </li>
            <li>
              <Link to="/order/page">Pedidos</Link>
            </li>
            <li className={styles.pointer} onClick={logout}> Sair</li>
          </>
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