import styles from './index.module.css'
import { BsChatRight } from "react-icons/bs"
import { IoIosArrowUp } from "react-icons/io"
const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.left}>
                <BsChatRight className={styles.icon} size={20} />
                <p className={styles.text}>Chats</p>
            </div>
            <div className={styles.right}>
                <IoIosArrowUp className={styles.icon} />
            </div>
        </div>
    )
}

export default Chat
