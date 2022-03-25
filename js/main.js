// Learn Arrays Part_20
// *? Project-05: Counter Function
// reduce() Method and for of Loop

let numbers = [2, 2, 3, 3, 3, 4, ,4,4,4,4,,4,4];

let totalNumber = count(numbers, 3);

function count(array, searchElement) {
    
    // for..of (old way)
    // let count= 0;
    // for (const element of array) {
    //     if(searchElement === element)count++ 
    // }
    // return count

    // reduce() (new way)
    return array.reduce((total, cv) =>{
        let count = (cv === searchElement)? 1 : 0;
        return total + count
    },0)

}

console.log(totalNumber);







