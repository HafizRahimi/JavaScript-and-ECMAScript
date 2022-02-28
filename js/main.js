//Fetch and Async

const posts_url = "https://jsonplaceholder.typicode.com/posts/";
const users_url = "https://jsonplaceholder.typicode.com/users/";
const app = document.getElementById("app");

// console.log(fetch(url));

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))


async function getAuthors(url, id) {
    const response = await fetch(url + id);
    const author = await response.json();
    return author;
}


async function getArticles(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // let postFilter = data.filter(post => post.userId < 4 && post.userId > 2)
    let postFilter = data.filter(post => post.userId < 2)

    console.log(postFilter);
    
    postFilter.forEach(async post =>{
        // console.log(post);
        post.user = await getAuthors(users_url, post.userId);
        console.log(post.user);
        app.innerHTML += `
        <article>
            <h2>${post.title}</h2>
            <small>${post.user.name}</small>
            <p>${post.body}</p>
        </article>
        <hr>
        `
    })
}

getArticles(posts_url);