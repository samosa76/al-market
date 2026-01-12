import style from "./ListBarang.module.css";

function ListBarang() {
    return (
        <div className={style.container}>

            <div className={style.title}>
                <img src="/image/tambah_barang.png" alt="bg" className={style.title_bg}></img>
                <p>Tambah Barang</p>
            </div>

            <div className={style.list}>

                <Barang />
                <Barang />
                <Barang />

            </div>

            <div className={style.catalog}></div>

        </div>
    )
}

function Barang() {
    return (
        <div className={style.card}>
            <img src="/image/tambah_barang.png" alt="bg" className={style.img}></img>

            <div className={style.text}>
                <div className={style.kriteria}>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Nama :</p>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Stock :</p>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Supllier :</p>
                </div>

                <div className={style.price}>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rp.000.000.000</p>
                </div>
            </div>
        </div>
    )
}

export default ListBarang;