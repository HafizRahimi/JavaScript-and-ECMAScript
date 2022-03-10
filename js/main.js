// if, else and else if

var hour = 33 ;

if (hour >= 6 && hour <= 11) {
    console.log('Good morning');
} else if (hour > 11 && hour <= 15) {
    console.log('Good soon');
} else if (hour > 15 && hour <= 20) {
    console.log('Good Evening');
} else if(hour > 20 && hour <= 24)console.log('Good night!');
else if(hour >=1 && hour <= 5)console.log('Good mid night');
else {
    console.log('What did you do!?');
    console.error('not in range');
}

