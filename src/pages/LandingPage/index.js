import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserRow from '../../components/UserRow'
import styles from "./index.module.css"
const LandingPage = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const getUserData = async () => {
        setLoading(true)
        try {
            const res = await axios.get("https://panorbit.in/api/users.json")
            setUsers(res?.data?.users)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardHeaderText}>Select an account</h2>
                    </div>
                    <div className={styles.cardBody}>
                        {loading && "Loading"}
                        {users !== null && users.map(user => <UserRow key={user.id} data={user} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
