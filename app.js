console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if(count < 1) {
        count *= -1;
    }
    for(let i = 1; i <= count; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(-25)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if(age < 16) {
        console.log(belowSixteen);
    }else {
        console.log(aboveSixteen);
    }
}
checkAge("Joe", 21)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
    if(x == 0 && y == 0) {
        console.log(`${x}, ${y} is at the center point`);
    }else if(x == 0) {
        console.log(`${x}, ${y} is on the Y Axis`);
    }else if(y == 0) {
        console.log(`${x}, ${y} is on the X Axis`);
    }else if(x > 0 && y > 0) {
        console.log(`${x}, ${y} is in the 1st Quadrant`);
    }else if(x < 0 && y > 0) {
        console.log(`${x}, ${y} is in the 2nd Quadrant`);
    }else if(x < 0 && y < 0) {
        console.log(`${x}, ${y} is in the 3rd Quadrant`);
    }else {
        console.log(`${x}, ${y} is in the 4th Quadrant`);
    }
}
whichQuadrant(1, -10)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(x, y, z) {
    
    if(x + y > z && x + z > y && y + z > x) {
        if(x == y && y == z) {
            console.log(`This is an equilateral triangle`);
        }else if(x == y || y == z || x == z) {
            console.log(`This is an isosceles triangle`);
        }else {
            console.log(`This is a scalene triangle`);
        }
    }else {
        console.log(`This is an invalid triangle`)
    }
}
typeOfTriangle(10, 6, 8)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function cellPhoneDataUsage(planLimit, day, usage) {
    if(usage > planLimit) {
        console.log(`You have run out of data for the rest of the month.`);
    }else {    
        let allowedUsagePerDay = (planLimit / 30).toFixed(2);
        if(allowedUsagePerDay * day < usage) {
            console.log(`${day} days used, ${30 - day} days remaining`);
            console.log(`Average daily use: ${allowedUsagePerDay} GB/day`);
            console.log(`You are EXCEEDING your average daily use (${(usage / day).toFixed(2)} GB/day),`);
            console.log(`continuing this high usage, you'll exceed your data plan by ${(usage / day * 30) - planLimit} GB.`);
            console.log(`To stay below your data plan, use no more than ${((planLimit - usage) / (30 - day)).toFixed(2)} GB/day.`);
        }
        else {
            console.log(`${day} days used, ${30 - day} days remaining`);
            console.log(`Average daily use: ${allowedUsagePerDay} GB/day`);
            console.log(`You are BELOW your average daily use (${(usage / day).toFixed(2)} GB/day),`);
            console.log(`continuing this usage, you'll have an excess of ${planLimit - (usage / day * 30)} GB left over at the end of the period.`);
            console.log(`You could use up to ${((planLimit - usage) / (30 - day)).toFixed(2)} GB/day for the rest of the period without exceeding your limit.`);
        }
    }
}
cellPhoneDataUsage(100, 15, 46)
