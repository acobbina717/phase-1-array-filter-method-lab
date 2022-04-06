// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {

    const who = drivers.filter((driver) => {
        if (driver.toLowerCase() === name.toLowerCase()) {
            return driver
        }
    })
    return who
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(x => {
        if (x.substring(0, letters.length) === letters) {
            return x
        }
    })
}

function matchName(array, string) {
    return array.filter(x => x.name === string)
}





// console.log(findMatching(drivers, 'BOBBY'))
