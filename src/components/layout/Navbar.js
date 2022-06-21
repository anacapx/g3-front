import { Link, useNavigate } from 'react-router-dom'

import styles from './Navbar.module.css'

import logo from '../../assets/kimchi-logo.png'

import useGlobal from "../../hooks/useGlobal";

function Navbar() {
  const { authenticated, logout } = useGlobal();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo} onClick={() => navigate('/home')}>
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
              <Link to="/user/page">Clientes</Link>
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