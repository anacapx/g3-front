import useGlobal from "../../hooks/useGlobal";

import BigButton from '../../components/BigButton'

function Home() {
    const { authenticated } = useGlobal();

    return (
        <section >
            <h1>Home</h1>
            {authenticated ? (
                <>
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
                </>
            ) : (
                <>
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
                </>
            )}
        </section>
    )
}

export default Home;