// let x=[1,2,3,4,5,6]
// function minmax(array) {
//     let answer=[];
//     let min = array.reduce((acc, cur)=> {
//         return (cur<acc ? cur : acc)
//     })
//     let max = array.reduce((acc, cur)=> {
//         return (cur>acc ? cur : acc)
//     })

//     answer.push(min, max);
// console.log(answer)

// }

// minmax(x);

//..................

// let a = 453;

// function possibledigitswap(number) {
//     let arr = ((number.toString().split("").reverse().join("")))
//     console.log((arr));
//     if(number>arr) {
//         console.log(true)
//         return true;
//     }
//     else {
//         console.log(false)
//         return false
//     }
// }

// possibledigitswap(a);


//.......................


// drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
//   ];
// function sortprices(array) {
//     for(let i=0 ; i<array.length-1; i++) {
//         for(let j=0; j<array.length-i-1; j++) {
//             if(array[j].price>array[j+1].price) {
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     console.log(array);

// }


// sortprices(drinks);


//............................................



// let a = 256;

// function tobinary(number) {
//     if(number===0) {
//         console.log(0);
//         return 0;
//     }
//     else if(number<1024 && number >-1024) {
//         console.log(number.toString(2));
//         return number.toString(2);
//     }
//     else {
//         console.error("error occured");
//     }
    
// }

// tobinary(a);



//................................................




// function s(side) {
//     let perimeter = (4*side);
//     return perimeter;
// }

// function c(radius) {
//     let perimeter=(2*Math.PI*radius);
//     return perimeter;
// }

// function Perimeter(polygon, length) {
//     console.log(polygon(length));

// }

// Perimeter(s, 7);
// Perimeter(c, 3);


//...................................................



// function toarray(object) {
//     console.log(Object.entries(object))

// };

// toarray({ shrimp: 15, tots: 12 });


//or//


// function toarray(object) {
// let resultarray = Object.keys(object).map((key)=> {
//     return [key, object[key]]
// })
// console.log(resultarray);
// }
// toarray({ shrimp: 15, tots: 12 });



//...................................................




// function add_suffix(suffix) {
//     return function(input) {
//         console.log(input+suffix)
//         return input+suffix;
//     }
    
// }

// let add_ly = add_suffix("ly");
// add_ly("total");

// let add_less  = add_suffix("less");
// add_less("fear");



//......................................................



const fs = require('fs');

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);


