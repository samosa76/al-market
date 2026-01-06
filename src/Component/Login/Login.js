import style from './Login.module.css';

function Login() {
    return (
        <div className={style.login_container}>
            <div className={style.left}>
                <img src="/image/user.png" alt="user" className={style.icon}></img>
                <p className={style.title1}>Login</p>
                <form>
                    <div className={style.login_input_name}>

                        <div className={style.title}>
                            <label for="Username"></label>
                        </div>

                        <input
                            className={style.placeforname}
                            type="text"
                            placeholder="Username"
                        />

                    </div>

                    <div>

                        <div className={style.title}>
                            <label for="e-mail"></label>
                        </div>

                        <input
                            className={style.placeforemail}
                            type="password"
                            placeholder="Password"
                        />

                    </div>

                    <button className={style.button}>
                        <p>Login</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;