import style from './Header.module.css';

function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <p className={style.title}>AL-MARKET</p>
            </div>
            <div className={style.opsions}>
                <p className={style.title}>Home</p>
                <p className={style.title}>Home</p>
                <p className={style.title}>Home</p>
            </div>
        </div>
    )
}

export default Header;