//1
  var result = null;
  console.log(result);

//2
  try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

//3
var x;
if (x === null) {
    console.log("null");
} else if (x === undefined) {
    console.log("undefined");
} else {
    console.log("ok");
}

//4
throw new Error();
console.log("Hello");

//5
(10).toString(100);  //RANGE ERROR

//6
try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
} 
