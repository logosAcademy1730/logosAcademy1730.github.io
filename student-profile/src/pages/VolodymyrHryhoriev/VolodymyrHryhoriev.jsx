import styles from "./VolodymyrHryhoriev.module.css"
import photo from "./images/Hryhoriev.jpg"

const VolodymyrHryhoriev = () => {
    return (
        <div className={styles.container}>
            <h1>Volodia Hryhoriev page</h1>
            <div className={styles.about}>
                <img src={photo} alt="img"/>
                <p>Hi, I'm a person who has a big interest in programming. Now, I'm trying to improve my skills. Ready to learn and gain experience.
                    I really love the teamwork, as in this way you can achieve the final success in minimal time.</p>
            </div>
        </div>
    );
}

export default VolodymyrHryhoriev;