const sumAll = function(start, end) {
    let sum = 0;
   if(!(typeof start === 'number')|| !(typeof end === 'number')){
    return 'ERROR'
   }
   else if ((start <0) || (end<0)){
    return 'ERROR'
}
    else{
        if(start>end){
            for(let j = end; j<= start; j++){
                sum+=j;
                }
        }
        else{
            for(let i = start; i<=end; i++){
        sum +=i;
                }
        }
        return sum;
}
};
console.log(sumAll('Hi',1));
// Do not edit below this line
module.exports = sumAll;
