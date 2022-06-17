import useGlobal from "../../hooks/useGlobal";
import BigButton from "../../components/BigButton";
import { Link } from 'react-router-dom'
import './style.css';

function Home() {

    return (
        <section className="home_container">
                <main className="main">
                    {/* <span>Olá, Foodlover!</span> */}
                    <BigButton
                        text="Usuários"
                        link="/user/page"
                    />

                    <BigButton
                        text="Pedidos"
                        link="/order/page"
                    />
                </main>
        </section>
    )
}

export default Home;