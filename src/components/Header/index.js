import { useContext, useState } from 'react'
import styles from './index.module.css'
import { UserContext } from '../../context'
import UserModal from '../UserModal'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { user, routeName } = useContext(UserContext)
    const onClickModal = () => {
        setIsModalOpen(prev => !prev)
    }
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{routeName}</h2>
                <div className={styles.userInfo} onClick={onClickModal}>
                    <img src={user?.profilepicture} className={styles.avtar} />
                    <h6 className={styles.userName}>{user.name}</h6>
                </div>
            </div>
            {isModalOpen && <UserModal />}
        </div>
    )
}

export default Header
