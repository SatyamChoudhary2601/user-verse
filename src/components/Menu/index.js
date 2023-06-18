import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useContext } from "react";
import { UserContext } from "../../context";
import { BiChevronRight } from "react-icons/bi";
const Menu = ({ item, index, arr }) => {
    const { setRouteName, routeName } = useContext(UserContext);
    const onClickHandler = () => {
        setRouteName(item.title);
    };
    return (
        <Link to={item.href} onClick={onClickHandler} className={styles.link}>
            <div className={styles.menu}>
                <h5 className={styles.menuText}>{item.title}</h5>
                {routeName === item.title && (
                    <div className={styles.activeDiv}>
                        <BiChevronRight color="var(--gray-400)" size={25} />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Menu;
