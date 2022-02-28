//Async and Await for Promise

let articles = [
    { title: 'First articles', content: 'Hello World!' },
    { title: 'Second articles', content: 'Hello JS!' },
];

function showArticle() {
    articles.forEach((article) => {
        console.log(`${article.title} : ${article.content}`);
    });
}

//Promise
function addArticle(title, content) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let articlesLength = articles.length;
            // console.log(articlesLength);
            articles.push({ title, content });
            // console.log(articles.length);
            if (articles.length == articlesLength + 1) {
                resolve('Article added.');
            } else {
                reject('Something went wrong!!!!');
            }
        }, 500);
    });
}

//Async and Await for Promise
async function init() {
    await addArticle('Third', 'Hello Node!');
    showArticle();
}

init();
