
m = [4,7,2,9,5]

let max = m[0]

for (let i = 0; i< m.length; i++) {
  const e = m[i];
  if (max < m[i]){
    max = m[i]
  }
}
console.log(max)