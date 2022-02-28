
let articles = [
    {title: 'First articles', content: 'Hello World!'},
    {title: 'Second articles', content: 'Hello JS!'}
]

//Promise


function showArticle(){
    articles.forEach(article =>{
        console.log(`${article.title} : ${article.content}`);
    })
}

//Promise
function addArticle(title, content){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let articlesLength = articles.length;
            // console.log(articlesLength);
            articles.push({title, content});
            // console.log(articles.length);
            if(articles.length == articlesLength + 1){
                resolve('Article added.')
            } else {
                reject('Something went wrong!!!!')
            }
        }, 500)
    })
}

//Then and catch Promise 
addArticle('Third', 'Hello Node!')
    // .then(data =>{
    //     console.log(data);
    //     showArticle();
    // })
    .then(showArticle)
    .catch(err =>{
        console.log(err);
    })



    

