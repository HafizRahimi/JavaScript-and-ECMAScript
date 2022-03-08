// Setter and Getter For Function

var person = {
    fName: 'Hafiz',
    lName: 'Rahimi',

    //The old way Create a Method
    // fullName: function () {
    //     return `${person.fName} ${person.lName}`
    // },

    // fullName:() =>  `${person.fName} ${person.lName}`,

    // The new way Create a Method
    // fullName() {
    //     return `${person.fName} ${person.lName}`
    // }

    // Getter
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    // Setter
    set fullName(value) {
        var name = value.split(' ');
        // console.log(name);

        this.fName = name[0];
        this.lName = name[1]
    },
};


// console.log(`${person.fName} ${person.lName}`);
// console.log(person.fullName()); // have not Get and Set


//Getter
console.log(person.fullName);


// Setter
person.fullName = 'Ali Nori';

console.log(person);
console.log(person.fullName);
