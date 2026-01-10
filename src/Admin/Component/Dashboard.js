import style from './Dashboard.module.css'

function Dashboard() {
    return (
        <div className={`${style.container} ${style.flex_center}`}>
            <div className={`${style.container_menu} ${style.card}`}>
                <Menu title="Masukan Barang" />
            </div>
            <div className={`${style.container_menu} ${style.card}`}>
                <Menu title="Tambah Penjual" />
            </div>
            <div className={`${style.container_menu} ${style.card}`}>
                <Menu title="Tambah Pembeli" />
            </div>
        </div>
    )
}

function Menu({ title }) {
    return (
        <div className={style.menu}>

            <img src="/image/Admin/image_barang_admin.png" alt="Logo" className={style.menu_logo} />

            <div className={style.menu_desc}>
                <p>{title}</p>
            </div>

        </div>
    )
}

export default Dashboard;