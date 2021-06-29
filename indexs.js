const CryptoJS = require('crypto-js')
//data
const message = "fazztrack";
const key = "something";

const enskripsi = (m, k) =>{
    //variabel untuk menjalankan enskripsi
    let encrypted = CryptoJS.AES.encrypt(m, k).toString()
    return encrypted
}
console.log(enskripsi(message, key))

const deskripsi = (e, k) =>{
    //variabel untuk menjalankan enskripsi
    let decrypted = CryptoJS.AES.decrypt(e, k)
    //variabel untuk menghasilkan output
    let output = decrypted.toString(CryptoJS.enc.Utf8)
    console.log(output)
}
deskripsi(enskripsi(message, key), key)