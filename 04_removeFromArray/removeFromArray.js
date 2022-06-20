const removeFromArray = function(...toRemove) {
   /* const array = toRemove[0];
    return array.filter(item => !toRemove.includes(item));
*/
let array = toRemove[0];
let newlist = [];

array.forEach((element) => {
    if (!toRemove.includes(element)){
        newlist.push(element);
    }
});
return newlist

};


// Do not edit below this line
module.exports = removeFromArray;
