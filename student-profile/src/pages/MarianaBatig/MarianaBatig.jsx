import styles from "./MarianaBatig.module.css";
import photo from "./Mariana.jpg"
const MarianaBatig = () => {
    return (
        <div className={styles.container}>
            <div >
                <h1>Mariana's page</h1>
            </div>
            <div className={styles.bigBlock}>
                <div className={styles.containerOne}>
                    <img src={photo} />
                </div>
                <div className={styles.containerTwo}>
                    <p> Hi I'm Mariana, a person who has been burning with technology since an early age and I believe programming is a way where I can develop in what I love.  Although sometimes it is very difficult, but immediately comes to mind the phrase "And what is easy?)" </p>
                </div>

            </div>
        </div>
    );
};

export default MarianaBatig;
