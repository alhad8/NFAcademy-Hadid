let daftarPelanggan = []

class Pelanggan {
    constructor(nama, notelp, kendaraan) {
        this.nama = nama
        this.notelp = notelp
        this.kendaraan = kendaraan
    }

    getInfo() {
        return `${this.nama} - ${this.notelp} - ${this.kendaraan}`
    }
}

function penyewaBaru() {
    event.preventDefault()

    let nama = document.getElementById("Nama").value
    let notelp = document.getElementById("notelp").value
    let kendaraan = document.getElementById("Kendaraan").value

    if (nama ==="" || notelp ==="" || kendaraan ==="") {
        alert("Isi data")
        return
    }

    let pelanggan = new Pelanggan (nama, notelp, kendaraan)

    daftarPelanggan.push(pelanggan)

    document.getElementById("sewa").reset()

    console.log("Data Pelanggan berhasil disimpan")
}

function tampilkanPelanggan() {
    let output = "<h3>Daftar Pelanggan:</h3><ul>"

    if (daftarPelanggan === 0) {
        output += "<li> Belum ada Pelanggan </li>"
    } else {
        daftarPelanggan.forEach((p) => {
            output += `<li>${p.getInfo()}</li>`
        })
    }

    output += "</ul>"

    document.getElementById("hasilData").innerHTML = output
}