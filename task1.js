const film = ['game of throne', "Dark", 'lord of the ring', 'harry potter', 'la casa de papel', 'peaky blinder']

//1 The sort() method sorts an array alphabetically:

const filmSort = film.sort()
console.log("========SORT========")
console.log(filmSort)

//2 method toString() converts an array to a string of (comma separated) array values.
const filmString = film.toString()
console.log("=======tostring=======")
console.log(filmString)

//3 The pop() method removes the last element from an array:
const filmPop = film.pop()
console.log ("=======pop=======")
console.log(film)

//4 The push() method adds a new element to an array (at the end):
const filmPush = film.push('sherlock holmes')
console.log ('======push======')
console.log(film)

//5 The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
const filmSplice = film.splice(1, 0, 'le miserable')
console.log ('======splice======')
console.log(film)

//6 The slice() method slices out a piece of an array into a new array.
const filmSlice = film.slice(0, 3)
console.log( '=====slice=====')
console.log(filmSlice)

//7 The filter() method creates a new array with array elements that passes a test.
const filmFilter = film.filter((e, i) => {
    if (e.includes('a')){
        return e
    }
})
console.log('=====filter=====')
console.log(film)

//8 The shift() method removes the first array element and "shifts" all other elements to a lower index.
const filmShift = film.shift()
console.log('======shift======')
console.log(film)

//9 The find() method returns the value of the first array element that passes a test function.
const filmFind = film.find((e,i) =>{
    if (e.includes('a')) {
        return e
    }
})
console.log('=====find=====')
console.log(filmFind)

//10 The indexOf() method searches an array for an element value and returns its position.
let position = film.indexOf('lord of the ring')
console.log('=====index=====')
console.log(position)
