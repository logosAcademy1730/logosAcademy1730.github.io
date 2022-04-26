import React from "react";
import style from "./Borysov.module.css";
import photo from "./image/photo2.png";

const Borysov = () => {
    return(
        <section className={style.section}>
            <header className={style.header}>
                <span className={style.logo}>Pasha Borysov page</span>
            </header>
            <div className={style.hero}>
                <div className={`${style.container}  ${style.hero__container}`}>
                    <div className={style.hero__about}>
                        <h1 className={style.hero__title}>Web-developer</h1>
                        <h2 className={style.hero__subtitle}>Pavlo Borysov</h2>
                        <p className={style.hero__description}>
                            hi, i'm a developer trying to learn everything new and improve my skills.
                        </p>
                        <div className={style.hero__links}>
                            <a className={style.hero__link} target={'_blank'} href={'#'}><i className='bx bxl-facebook icon'  id={style.bx__first}></i></a>
                            <a className={style.hero__link} target={'_blank'} href={"https://www.instagram.com/xzvcursed/"}><i className='bx bxl-instagram icon' id={style.bx__second}></i></a>
                            <a className={style.hero__link} target={'_blank'} href={'#'}><i className='bx bxl-pinterest icon' id={style.bx__third}></i></a>
                            <a className={style.hero__link} target={'_blank'} href={'https://github.com/exlymex'}><i className={`bx bxl-github`} id={style.bx__fouth}></i></a>
                        </div>

                    </div>
                    <div className={style.hero__box}>
                        <img src={photo} alt='img'/>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Borysov