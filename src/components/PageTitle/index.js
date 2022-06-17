import './style.css';

function PageTitle({ children }) {
    return (
        <main className="pageTitle_main">
            <h1 className='pageTitle_h1'>{children}</h1>
        </main>
    )
}

export default PageTitle