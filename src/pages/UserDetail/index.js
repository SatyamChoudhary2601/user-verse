import { useContext, useState } from "react";
import styles from "./index.module.css";
import { UserContext } from "../../context";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Chat from "../../components/Chat";
import Row from "./Row";

const UserDetail = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBGEQwr9rO_UkxI0DJS9pzMO6_MDDuE3lo"
    })
    const { user } = useContext(UserContext);
    const { name, email, username, profilepicture, phone, website, company, address } =
        user;
    if (!isLoaded) return <div>Loading...</div>;
    const lat = Number(address.geo.lat)
    const lng = Number(address.geo.lng)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.userProfile}>
                    <img src={profilepicture} className={styles.img} />
                    <h2 className={styles.h2}>{name}</h2>
                </div>
                <div className={styles.userInfo}>
                    <Row title="Username" value={username} />
                    <Row title="Email" value={email} />
                    <Row title="Phone" value={phone} />
                    <Row title="Website" value={website} />
                </div>
                <div className={styles.divider} />
                <p className={styles.p}>Company</p>
                <div className={styles.userInfo}>
                    <Row title="Name" value={company.name} />
                    <Row title="Catchphrase" value={company.catchPhrase} />
                    <Row title="bs" value={company.bs} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightWrapper}>
                    <p className={styles.p}>Address:</p>
                    <div className={styles.address}>
                        <Row title="Street" value={address.street} />
                        <Row title="Suite" value={address.suite} />
                        <Row title="City" value={address.city} />
                        <Row title="Zipcode" value={address.zipcode} />
                    </div>
    
                    <div style={{ marginTop: 20 }}>
                        <GoogleMap center={{
                            lat,
                            lng
                        }}
                            zoom={10}
                            mapContainerClassName="map-container"
                        />
                    </div>
                </div>
            </div>
            <Chat />
        </div>
    );
};

export default UserDetail;

