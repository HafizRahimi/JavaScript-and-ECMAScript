// Project 06 (if, else and for loop) : Sum of multiple

function multiple(limit) {
    let sum = 0;
    let totals = '';
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
            if (i !== 0) {
                if (totals === '') totals += `${i}`;
                else totals += ` + ${i}`;
            }
        }
    }
    let result = `${totals} = ${sum}`;
    console.log(result);
}

let total = multiple(9);
