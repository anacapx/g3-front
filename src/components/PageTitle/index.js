import { useEffect } from "react";
import useGlobal from "../../hooks/useGlobal";
import './style.css';

function PageTitle() {

    // useEffect(() => {
    //     actualPage
    // }, [])

    const { actualPage } = useGlobal();

    return (
        <main className="pageTitle_main">
            <h1 className='pageTitle_h1'>{actualPage}</h1>
        </main>
    )
}

export default PageTitle