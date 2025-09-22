let produkToko = [
    {id: 1, nama :"Laptop", harga: 7000000, stok: 5},
    {id: 2, nama :"Mouse", harga: 200000, stok: 10},
    {id: 3, nama :"Keyboard", harga: 350000, stok: 7},

]

let idTerakhir = 3


function tambahProduk(nama, harga, stok) {
    idTerakhir++

    const produkBaru = {
        id: idTerakhir,
        nama: nama,
        harga: harga,
        stok: stok
    }

    produkToko.push(produkBaru)

    console.log(`produk "${nama}" ditambahkan dengan ID: ${idTerakhir}`)
    return produkBaru 

}


function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id)

    if (index !== -1) {
        const namaProduk = produkToko[index].nama
        
        produkToko.splice(index,1)

        console.log(`produk "${namaProduk} dengan ID: ${id} dihapus`)
        return true
    } else {
        console.log(`produk tidak ditemukan`)
        return false
    }
}

function tampilkanProduk() {
    console.log(">>>>>>> Daftar Produk Toko <<<<<<<")

    if (produkToko.length === 0) {
        console.log("Tidak ada produk")
        return
    }
    produkToko.forEach(function(produk, index) {
        console.log(`${index + 1}, ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp ${produk.harga.toLocaleString()} | Stok: ${produk.stok}`)
    })
}

tampilkanProduk()
tambahProduk("LiquidCooler", 1000000, 8)
hapusProduk(4)
tambahProduk("Q20", 500000, 1)
hapusProduk(5)