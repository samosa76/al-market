import { useState } from "react";
import style from "./Transaksi.module.css";

function Transaksi() {
    return (
        <div className={style.container}>

            <div className={style.title}>
                <img src="/image/tambah_barang.png" alt="bg" className={style.title_bg}></img>
                <p>Transaksi</p>
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
    const [angka, setAngka] = useState(0);

    function plus() {
        setAngka(angka + 1)
    }

    function min() {
        if (angka !== 0) {
            setAngka(angka - 1)
        }
    }

    return (
        <div className={style.card}>

            <div className={style.info}>

                <img src="/image/tambah_barang.png" alt="bg" className={style.img}></img>

                <div className={style.text}>
                    <div className={style.kriteria}>
                        <p className={style.txt}>Nama :</p>
                        <p className={style.txt}>Stock :</p>
                    </div>

                    <div className={style.price}>
                        <p className={style.txt}>Rp.000.000.000</p>
                    </div>
                </div>

            </div>

            <div className={style.sale}>

                <div className={style.button}>
                    <div className={style.btn_min} onClick={min}>-</div>
                    <p>{angka}</p>
                    <div className={style.btn_plus} onClick={plus}>+</div>
                </div>

                <div className={style.sale_price}>
                    <p style={{fontWeight: 'bold', fontSize: '12pt'}}>Checkout</p>
                </div>
            </div>

        </div>
    )
}

export default Transaksi;