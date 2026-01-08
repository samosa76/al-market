import style from "./Home.module.css"

function Home() {
    return (

        <div className={style.container}>
            <div className={style.container1}>

                <div className={style.topup}>

                    <div className={style.nama_kelas}>

                        <div className={style.identitas}>
                            <p>Nama : </p>
                            <p>Kelas : </p>
                        </div>
                        <div className={style.topup_button}>
                            <img src="/image/arrow.png" alt="arrow" className={style.arrow}></img>
                            <div className={style.income}>
                                <p style={{ fontSize: "8px", color: "white" }}>Income</p>
                                <h4 style={{ color: "white" }}>Rp.000.000.000</h4>
                            </div>
                        </div>

                    </div>

                    <div className={style.balance}>
                        <div className={style.total_saldo}>
                            <p>Total Balance</p>
                            <p className={style.saldo}>Rp.000.000.000</p>
                        </div>
                        <div className={style.exepense_button}>
                            <img src="/image/arrow.png" alt="arrow" className={style.arrow}></img>
                            <div className={style.income}>
                                <p style={{ fontSize: "8px", color: "white" }}>Income</p>
                                <h4 style={{ color: "white" }}>Rp.000.000.000</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.grafik}>

                </div>

            </div>

            <div className={style.container2}>

                <div className={style.date}>

                </div>

                <div className={style.history}>
                    <div className={style.title}>
                        <p>NO</p>
                        <p className={style.title_name}>Nama Barang</p>
                        <p>ID Barang</p>
                        <p>Total Belanja</p>
                        <p>Waktu</p>
                    </div>
                    <hr />
                </div>

            </div>

        </div>
    )
}

export default Home;