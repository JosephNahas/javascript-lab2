console.log('if-else Condition:\n');

let number = 511;

if (number > 0){
    console.log(number + ' is a positive number.');
}
else if (number < 0) {
    console.log(number + ' is a negative number.');
}
else{
    console.log(number + ' is euqal to zero');
}

console.log('\n--------------------------');

console.log('\nSwitch Statement:\n');

let day = 3;

switch (day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Number out of scope');
        break;
}

console.log('\n--------------------------');

console.log('\nLoops:\n');

console.log('For loop:\n');

for (let i = 1; i <= 5; i++){
    console.log(i);
}

console.log('\n--------------------------');

console.log('\nWhile Loop:\n');

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

console.log('\n--------------------------');

console.log('\nDo...While Loop;\n');

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5)

console.log('\n--------------------------');

console.log('\nControl flow with break and continue:\n');

console.log('break at 3:\n');

for (let i = 1; i <= 5; i++){
    console.log(i);
    if (i === 3){
        break;
    }
}

console.log('\nskip the number 3\n');

for (let i = 1; i <= 5; i++){
    if (i === 3){
        continue;
    }
    console.log(i);
}

console.log('\n--------------------------');

console.log('\nScope and Context\n');

let globalVar = "global variable";

function scope(){
    let localVar = "local variable";
    console.log(`I can access both the ${globalVar} and the ${localVar} from inside this scope function.`);
}

scope();