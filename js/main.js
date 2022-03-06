// Project 05: Create a constructor function for Post Object

// constructor function 

function CreatePost(title, body, author, comments, views, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = comments;
    this.views = views;
    this.isLive = isLive;
}

var comments = [
    {author:'y' , content:'kk'},
    {author:'x' , content:'lll'}
];


var post1 = new CreatePost('b', 'g', 'n', comments, 245, false);

console.log(post1);
console.log(post1.comments[1].author);





