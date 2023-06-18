import styles from './index.module.css'
import Sidebar from '../Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from "../Header"

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
