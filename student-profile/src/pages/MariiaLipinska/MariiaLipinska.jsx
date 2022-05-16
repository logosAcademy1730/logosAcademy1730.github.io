import styles from "./MariiaLipinska.module.css";
import photo from "./Mariia.jpg"

const MariiaLipinska = () => {
    return (
        <div className={styles.container}>
            <div >
                <h1>Mariia Lipinska</h1>
            </div>
            <div className={styles.bigBlock}>
                <div>
                    <img className={styles.picture} src={photo} alt="Mariia" />
                </div>
                <div className={styles.text}>
                    <p> Hello! My name is Mariia. I've just finished my education in Lviv music academy named after Mykola Lysenko. I've been teaching music for 2 years, but now try my forces in frontend developing. It's difficult and unusual thing for me, but I try to learn carefully, 'cause technology is the future.  </p>
                </div>

            </div>
        </div>
    );
}

export default MariiaLipinska;
