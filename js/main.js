// this Keyword part1
// this in method  ===> Object
// this in function ===> window, global(node)



// this in method  ===> Object
var obj = {
    title: 'a',
    tags: [1, 3, 2, 4, 5],

    // method
    body() {
        // this: Object
        console.log(this);
    },
};

obj.body();


// this in function ===> window
function sum() {
    // this: window
    console.log(this);
}
sum();
console.log('-------------------------------------------');


var article = {
    title: 'Animal',
    tags: [23, 45, 65, 76, 89],

    body(){
        console.log(this);
        this.tags.forEach(function(tag){
            // console.log(tag);
            console.log(this);
        })
    }
};

article.body()
