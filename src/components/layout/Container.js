import { Link } from 'react-router-dom'
import PageTitle from '../PageTitle/index';
import styles from './Container.module.css';

function Container({ children }) {
    // useState

    return (
        <main className={styles.container}>
            <PageTitle>
                Home
            </PageTitle>
            {children}
        </main>
    )
}

export default Container