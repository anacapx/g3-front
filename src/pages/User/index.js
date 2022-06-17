import BigButton from '../../components/BigButton'
import "./style.css";

function User() {

    return (
        <section className='user_container' >
            <BigButton
                text="Cadastrar Usuário"
                link="/user/register"
            />

            <BigButton
                text="Listar Usuários"
                link="/users"
            />

            <BigButton
                text="Buscar Usuários"
                link="/user/search"
            />

        </section>
    )
}

export default User;