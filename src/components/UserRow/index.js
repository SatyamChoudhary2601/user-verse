import { Link } from 'react-router-dom';
import styles from './index.module.css'
import { useContext } from 'react';
import { UserContext } from '../../context';

const UserRow = ({ data }) => {
    const { name, profilepicture } = data;
    const { getUsers } = useContext(UserContext)
    const onClickHandler = () => {
        localStorage.setItem('user', JSON.stringify(data))
        getUsers(data)
    }
    return (
        <Link to={"/user/profile"} onClick={onClickHandler}>
            <div className={[styles.container]}>
                <img src={profilepicture} />
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default UserRow
