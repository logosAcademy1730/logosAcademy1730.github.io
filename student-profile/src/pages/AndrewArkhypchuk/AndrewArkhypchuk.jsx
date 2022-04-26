import classes from "./AndrewArkhypchuk.module.css";
import myphoto from "./Andrew.jpg"
const AndrewArkhypchuk = () => {
    return (
        <div>
        <div className={classes.container}>
            <h1>Andrew  page</h1>
        </div>
            <div >
            <div>
                <img alt="my foto" className={classes.img} src={myphoto} />
            </div>
            <div>
    <p> Hi my name is Andrew,a have 8 months experience with Front End development,
    Can be a great developer in your Company..!</p>
            </div>

            </div>
        </div>
);
};

export default AndrewArkhypchuk;
