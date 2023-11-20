const findTheOldest = function(people) {
    let currentYear = 2023;

    let currentOldest = 0;
    let currentPeople = people[0];

    people.map((value) => {
        if(value.yearOfDeath){
            if((value.yearOfDeath - value.yearOfBirth) > currentOldest){
                currentOldest = value.yearOfDeath - value.yearOfBirth;
                currentPeople = value;
            }
        }
        else{
            if((currentYear - value.yearOfBirth) > currentOldest){
                currentOldest = currentYear - value.yearOfBirth;
                currentPeople = value;
            }
        }
        
    })

    return currentPeople;

    /*people.map((value) => 
    (value.yearOfDeath - value.yearOfBirth) > currentOldest ? 
    (currentOldest = value.yearOfDeath - value.yearOfBirth) &&
    (nameOfOldest = value.name) : currentOldest = currentOldest);*/ 
};


// Do not edit below this line
module.exports = findTheOldest;
