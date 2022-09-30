//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1, num2, num3, num4, num5: number;
num1 = parseInt(prompt('dakhl ra9m 1'));
num2 = parseInt(prompt('dakhl ra9m 2'));
num4 = parseInt(prompt('dakhl ra9m 3'));
num5 = parseInt(prompt('dakhl ra9m 4'));
console.log('result=');
num3 = num1 * num2 * num4 * num5;
console.log(num3);

if (num3 == 0) {
  console.log('ra9m mon3adim');
} else if (num3 < 0) {
  console.log('ra9m salib - ');
} else {
  console.log('ra9m mojab + ');
}

console.log('final');
