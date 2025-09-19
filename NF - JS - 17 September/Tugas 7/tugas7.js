function hitLuas() {
    let panjang = document.getElementById("panjang").value
    let lebar = document.getElementById("lebar").value
        if (panjang && lebar) {
            let hit1 = panjang * lebar
            document.getElementById("hasilLPP").innerHTML = hit1
            }
        }

function hitBS() {
    let sisi = document.getElementById("sisi").value
        if (sisi) {
            let hit2 = sisi * sisi
            document.getElementById("hasilBujur").innerHTML = hit2
            }
        }

function hitSegitiga() {
    let alas = document.getElementById("alas").value
    let tinggi = document.getElementById("tinggi").value
        if (alas && tinggi) {
            let hit3 = 0.5 * alas * tinggi
            document.getElementById("hasilSegitiga").innerHTML = hit3
            }
        }