import style from './Login.module.css';

function Login() {
    return (
        <div className={style.login_container} style={{ backgroundImage: "url('/image/bg_almarket.jpg')" }}>

            <div className={style.card}>

                <div>
                    <img src="/image/user.png" alt="user" className={style.icon}></img>
                </div>

                <div>
                    <p className={style.title1}>Login</p>
                </div>

                <form>
                    <div className={style.container_input}>

                        <input
                            className={style.input_form}
                            type="text"
                            placeholder="Username"
                        />

                    </div>

                    <div className={style.container_input}>
                        <input
                            className={style.input_form}
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