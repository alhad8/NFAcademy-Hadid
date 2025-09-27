function lihatData() {
    console.log("--- Daftar Data ---")
    console.log("")

    data.map((item, index) => {
        console.log(`${index + 1}, Nama: ${item.nama}`)
        console.log(`Umur: ${item.umur} tahun`)
        console.log(`Alamat: ${item.alamat}`)
        console.log(`email: ${item.email}`)
    })
}

function tambahData(nama, umur, alamat, email) {
    const dataBaru = {
        nama: nama,
        umur: umur,
        alamat: alamat,
        email: email
    }

    data.push(dataBaru)
    console.log(`Data ${nama} berhasil ditambah!`)
}

function hapusData(nama) {
    const index = data.findIndex(item => item.nama === nama)

    if (index !== -1) {
        data.splice(index, 1)
        console.log(`Data ${nama} dihapus!`)
    } else {
        console.log(`Data dengan nama ${nama} tidak ditemukan`)
    }
}
console.log("Menampilkan")
lihatData()
tambahData("Gundala", 28,"Bekasi","Gundala@gmail.com")
hapusData("Gundala")

