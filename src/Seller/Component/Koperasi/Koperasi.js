import style from './Koperasi.module.css'

function Koperasi() {
    return(
        <div className={style.container}>
            <div className={`${style.container_transaction} ${style.flex_center}`}>
                <p>Transaction</p>
            </div>
            <div className={`${style.container_menu}`}>
                <div className={`${style.menu} ${style.flex_center}`}>
                    <p>Menu</p>
                </div>
                <div className={`${style.detail_menu} ${style.flex_center}`}>
                    <p>Detail Menu</p>
                </div>
            </div>
        </div>
    )
}
export default Koperasi;