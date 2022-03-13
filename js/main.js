// Project 08 (Two for Loops) : Stars


let rows = 10;

for (let row = 1; row < rows; row++) {
    let stars = '';
    for (let i = 0; i < row; i++) {
        stars += '*';
    }
    console.log(stars);
}
