let sum = 0

let a1 = [1,4,5,6,3,5,1,2,2]
let a11 = a1.length

for (let i = 0; i< a1.length; i++) {
  const e = a1[i];
    sum = sum + e
}
console.log("Среднее арифметическое массива =")
console.log(sum/a11)