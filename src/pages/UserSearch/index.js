import Input from '../../components/form/Input'

import { useState } from 'react'

import toast from '../../helpers/toast'

import useRequestUser from '../../hooks/useRequestUser'

function UserSearch() {

    const [search, setSearch] = useState({});
    const [searchParam, setSearchParam] = useState({});
    const [searchResultView, setSearchResultView] = useState([]);
    const { getOne, searchUserByParams } = useRequestUser();


    function handleSubmitId(e) {
        e.preventDefault()
        setSearchResultView([])

        if (!search) {
            toast.errorMsg("Preencha um termo para pesquisa")
        }
        if (searchParam == "id") {
            searchId(search)
        }

        if (searchParam == "name" || searchParam == "cpf" || searchParam == "email") {
            searchOtherParams(search)
        }
    }

    async function searchId(search) {
        if (isNaN(search)) {
            return toast.errorMsg("A pesquisa por id deve conter apenas números")
        }
        const resp = await getOne('/user', search, true)
        if (resp) {
            const searchResult = []
            searchResult.push(resp)
            setSearchResultView(searchResult)
            console.log(searchResult)
        }
    }

    async function searchOtherParams(search){
        if (searchParam == "cpf" && isNaN(search)) {
            return toast.errorMsg("A pesquisa por CPF deve conter apenas números")
        }
        const resp = await searchUserByParams('/user', searchParam, search, true)
        if (resp) {

            setSearchResultView(resp)
            if(resp.length == 0){
                toast.errorMsg("Sem resultados para a pesquisa realizada")
            }

            console.log(resp)
        }
    }


    return (
        <section>
            <h1>Busca de Usuários</h1>

            <fieldset class="form-group" onChange={(event) => setSearchParam(event.target.value)}>
                <legend class="mt-4">Buscar</legend>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="id" value="id" />
                        Id
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="name" value="name" />
                        Nome
                    </label>
                </div>
                <div class="form-check disabled">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="email" value="email" />
                        E-mail
                    </label>
                </div>
                <div class="form-check disabled">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="cpf" value="cpf" />
                        CPF
                    </label>
                </div>

            </fieldset>

            <form onSubmit={handleSubmitId}>
                <Input
                    text=""
                    type="text"
                    name="search"
                    placeholder=""
                    handleOnChange={(event) => setSearch(event.target.value)}
                />
                <input type="submit" value="Buscar" />
            </form>

            {searchResultView.length > 0 ? (
            <>
            <h2>Resultado da Busca</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResultView.map(u => (
                        <tr key={u.id}>
                            <th scope="row">{u.id}</th>
                            <td>{u.name}</td>
                            <td>{u.cpf}</td>
                            <td>{u.phone}</td>
                            <td>{u.email}</td>
                            <td>{u.birthday}</td>
                            {/* <td>
                                    <button onClick={() => { deleteUser(u.id) }}>Excluir</button>
                                    <button onClick={() => { updateUser(u) }}>Alterar</button>
                                    <button onClick={() => { makeOrder(u.id) }}>Fazer pedido</button>
                                </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            </>) : (
                <></>
            )}





        </section>

    )

}

export default UserSearch