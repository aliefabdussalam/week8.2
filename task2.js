const nameFilter = (search,index,cb) =>{
  //data
  const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']
  //function filter  untuk mencari element yang cocok dengan ketentuan
  const cari = name.filter((e) => {
    if (e.includes(search)) {
      return e
    }else if (e.includes('An')) {
      //else if digunakan karena filter adalah sensitive case
      return e
    }
})
//hasil dari filter kemudian di slicing
 hasil = cari.slice(0,index)
 //callback untuk output
 cb(hasil)
}
nameFilter("an", 3,(hasil) =>{
  console.log(hasil)
}) 