const numericSort = (n1, n2, data) =>{
    if (n1 < n2 && data > 5) {
    const num = data.sort((a, b)=>{return a - b})
    return `${num.filter(c => c > n1 && c < n2)}`
    }
    else if(n1 > n2){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }
    else if(data < 5){
        return "Jumlah angka dalam dataArray tidak sesuai"
    }
}
console.log(numericSort(15, 3 , [2, 25, 4, 14, 17, 30, 8]))