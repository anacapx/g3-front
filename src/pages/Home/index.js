import useGlobal from "../../hooks/useGlobal";
import BigButton from "../../components/BigButton";
import './style.css';

function Home() {
    const { authenticated } = useGlobal();

    return (
        <section >
            <h1>Home</h1>
            {authenticated ? (
                <main className="main">
                    <h2>Bem-vindo(a) !</h2>
                    {/* TODO: Incluir dinâmicamente nome do adm */}
                    <BigButton
                        text="Usuários"
                        link="/user/page"
                    />

                    <BigButton
                        text="Pedidos"
                        link="/order/page"
                    />
                </main>
            ) : (
                <main className="main">
                    <h2>Bem-vindo(a) Foodlover!</h2>
                    <h3>Faça Login ou Registre-se</h3>
                    <BigButton
                        text="Login"
                        link="/login"
                    />

                    <BigButton
                        text="Registre-se"
                        link="/admin"
                    />
                </main>
            )}
        </section>
    )
}

export default Home;