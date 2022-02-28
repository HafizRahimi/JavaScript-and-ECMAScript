// Callback
let articles = [
    { title: 'First articles', content: 'Hello World!' },
    { title: 'Second articles', content: 'Hello JS!' },
];

function showArticle() {
    articles.forEach((article) => {
        console.log(`${article.title} : ${article.content}`);
    });
}

function addArticle(title, content, callback) {
    setTimeout(() => {
        articles.push({ title, content });
        callback();
    }, 500);
}

addArticle('Third', 'Hello Node!', showArticle);
// showArticle();
