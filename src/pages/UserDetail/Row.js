import styles from './row.module.css'

const Row = ({ title, value, onChange }) => {
    return (
        <div className={styles.row} onChange={onChange}>
            <div className={styles.key}>{title}</div>:
            <div className={styles.value}>{value}</div>
        </div>
    )
}

export default Row
