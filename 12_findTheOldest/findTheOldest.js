const findTheOldest = function(arr) {

    const currentYear = new Date().getFullYear()

    let oldestPerson = arr.reduce((oldest, person)=>{

        const personAge = (person.yearOfDeath || currentYear ) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        if(personAge > oldestAge){
            return person;
        }else{
            return oldest;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
