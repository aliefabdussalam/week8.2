const numericSort = (n1, n2, data) =>{
    //validasi persyaratan
    if (n1 < n2 && data.length > 5) {
    //sort
    
    //filter apabila persyaratan tercapai
    const output = data.filter(
        (c = (data) => {
          return data  > n1 && data < n2;
        })
      );
      return output.sort((a, b)=>{return a-b})
    }
    //apabila nilai awal lebih besar dari niai akhir
    else if(n1 > n2){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }
    //apabila data kurang dari 5
    else if(data < 5){
        return "Jumlah angka dalam dataArray tidak sesuai"
    }
    else{
        return "Jumlah angka dalam dataArray tidak ada"
    }
}
console.log(numericSort(5, 30 , [2, 25, 4, 14, 17, 30, 8]))