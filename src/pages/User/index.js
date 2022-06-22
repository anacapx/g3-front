import useGlobal from "../../hooks/useGlobal";
import { useEffect } from "react";
import BigButton from '../../components/BigButton'
import "./style.css";

function User() {

    const { setActualPage } = useGlobal();

    useEffect(() => {
        setActualPage("Clientes");
    }, [])

    return (
        <section className='user_container' >
            <BigButton
                text="Cadastrar Cliente"
                link="/user/register"
            />

            <BigButton
                text="Listar Clientes"
                link="/users"
            />

            <BigButton
                text="Buscar Cliente"
                link="/user/search"
            />

        </section>
    )
}

export default User;