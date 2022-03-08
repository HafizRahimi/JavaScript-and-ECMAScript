// Try & Catch

var person = {
    fName: 'Hafiz',
    lName: 'Rahimi',

    // Getter
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    // Setter
    set fullName(value) {
        // if(typeof value !== 'string') return

        if(typeof value !== 'string') {
            // create a Error
            throw new Error('Please enter Valid String')
        }

        var name = value.split(' ');
        if (name.length === 1) {
            throw new Error('Please enter first name and last name!')
        }

        this.fName = name[0];
        this.lName = name[1]

        if (name[1] === '') {
            throw new Error('Please enter last name!')
        }
    },
};


// Try & Catch
try {
    // person.fullName = null;

    person.fullName = 'Ali';

    // person.fullName = 'Ali ';
    // person.fullName = 'Ali Nori';

} catch (error) {
    if (error =='Error: Please enter last name!') {
        // log error 
        console.error(error)
    }else{
        alert(error)
    }
}

console.log(person.fullName);
