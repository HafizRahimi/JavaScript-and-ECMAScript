// this Keyword part2
// those Methods can refer this to any object and any function: 
// 1- call()
// 2- apply() 
// 3- bind() 


var article = {
    title: 'Animal',
    tags: [1, 3, 2, 4, 5],

// the old way: let that = this
    // body(){
    //     // console.log(this);
    //     let that = this
    //     this.tags.forEach(function(tag){
    //         // console.log(tag);
    //         console.log(`${that.title}: ${tag}`);
    //     })
    // }

// the new way: bind()
    // body(){
    //     this.tags.forEach(function(tag){
    //         console.log(`${this.title}: ${tag}`);
    //         // console.log(this);
    //     }.bind(this))
    // }

// the best way: Arrow function(has auto bind
    body(){
        this.tags.forEach(tag=> console.log(`${this.title}: ${tag}`))
    }
};

article.body()
console.log('-------------------------------------');



// those Methods can refer this to any object and any function: 
function video(x, y) {
    console.log(x, y);
    console.log(this);
}

// 1- call()
video.call({name: 'Ali'}, 2, 3);
console.log('-------------------------------------');

// 2- apply() 
video.apply({name: 'Hamid'}, [3, 4]);
console.log('-------------------------------------');


// 3- bind() 
video.bind({name: 'Hamid'}, 7,8)()
