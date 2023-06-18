import { useContext } from 'react'
import styles from './index.module.css'
import { UserContext } from '../../context'
import { useNavigate } from 'react-router-dom'

const UserModal = () => {
    const { user } = useContext(UserContext)
    const { profilepicture, name, email } = user;
    const navigate = useNavigate()
    return (
        <div className={styles.modal}>
            <img src={profilepicture} className={styles.profileImg} />
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.email}>{email}</p>
            <button className={styles.btn} onClick={() => navigate("/")}>
                Sign out
            </button>
        </div>
    )
}

export default UserModal
