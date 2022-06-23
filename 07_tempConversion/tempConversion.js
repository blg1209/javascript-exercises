const ftoc = function(far) {
  let convertedCelsius =  (far - 32) * (5/9);
  return Math.round(convertedCelsius *10)/10

};

const ctof = function(cel) {
  let convertedFarenheit = (cel * (9/5) + 32);
  return Math.round(convertedFarenheit *10)/10

};

console.log(ftoc(100))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
