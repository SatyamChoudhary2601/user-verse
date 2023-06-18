import { useLocation } from "react-router-dom";
import Menu from "../Menu";
import styles from "./index.module.css";
import { navItems } from "../../utils/constant";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        {navItems.map((item, i, arr) => (
          <Menu key={item.id} item={item} index={i} arr={arr} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
