import style from './Dashboard.module.css'

function Dashboard() {
    return(
        <div className={`${style.container} ${style.flex_center}`}>
            <div className={style.container_menu}></div>
            <div className={style.container_menu}></div>
            <div className={style.container_menu}></div>
        </div>
    )
}

export default Dashboard;