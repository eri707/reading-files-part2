// install line-reader
var lineReader = require('line-reader');
// this array will hold all the fruit
const fruitArray = [];
// define a function which can remove duplicates
function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) == index);
}
// read in the fruit using the line-reader
lineReader.eachLine('./fruits.txt', function (line, last) {
    fruitArray.push(line);
    // if this is the last fruit, deduplicate the fruitArray
    if (last) {
        console.log(removeDuplicates(fruitArray));
    }
})