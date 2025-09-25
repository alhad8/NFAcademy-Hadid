let produkList = [
            { id: 1, nama: "Laptop", harga: 5000000, stok: 10 },
            { id: 2, nama: "HP", harga: 2000000, stok: 15 },
            { id: 3, nama: "Mouse", harga: 100000, stok: 20 },
            { id: 4, nama: "Keyboard", harga: 300000, stok: 12 },
            { id: 5, nama: "Monitor", harga: 1500000, stok: 8 }
        ]

        function tambahProduk(nama, harga, stok) {
            const idBaru = produkList.length + 1
            const produkBaru = {id:  idBaru, nama, harga, stok}

            produkList = [...produkList, produkBaru]
            alert(`${nama} berhasil  ditambahkan!`)
        }

        function hapusProduk(id) {
            produkList = produkList.filter(produk => produk.id !== id)
            tampilkanProduk()
            alert("Produk berhasil dihapus")
        }

        function tampilkanProduk() {
            const container = document.getElementById('hasilProduk')

            if (produkList.length === 0) {
                container.innerHTML = '<p> Tidak ada produk </p>'
                return
            }

            let html= ''

            for (const{id, nama, harga, stok} of produkList) {
                html += `
            <div class="produk">
            <strong>${nama}</strong><br>
            Harga: Rp${harga.toLocaleString()}<br>
            Stok: ${stok}<br>
            <button onClick="hapusProduk(${id}) class="hapus">Hapus</button>
            `
            }

            container.innerHTML = html
        }

        document.getElementById('btnTambah').addEventListener('click', function() {
            const nama = document.getElementById('nama').value
            const harga = parseInt(document.getElementById('harga').value)
            const stok = parseInt(document.getElementById('stok').value)

            if (nama && harga && stok) {
                tambahProduk(nama, harga, stok)

                document.getElementById('nama').value = ''
                document.getElementById('harga').value = ''
                document.getElementById('stok').value = ''
            } else {
                alert('Isi semua')
            }
        })

        document.getElementById('btnTampilkan').addEventListener('click', function(){
            tampilkanProduk()
        })

        document.getElementById('btnHapusSemua').addEventListener('click', function(){
            if (confirm('Hapus semua produk')) {
                produkList = [...[]]
                tampilkanProduk()
                alert('semua produk dihapus')
            }
        })

        function tambahBanyakProduk(...produkBaru) {
            produkBaru.forEach(produk => {
                const { nama, harga, stok} = produk
                tambahProduk(nama, harga, stok)
                
            });
        }