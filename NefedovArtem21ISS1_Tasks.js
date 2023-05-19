//Задача№1------------

/*
let string1 = 'аавпвпвпа'

string2 = string1.slice(1)

console.log(`${string1[0].toUpperCase()}${string2}`)
*/


//Задача№2------------
/*
massive = [1,2,3,4,5]
sum = 0

for (let i = 0; i < massive.length; i++) {
    const e = massive[i];
    sum = sum + e
}
console.log(sum)
*/

//Задача№3------------

/*
sum = 0

function sumMas(){
    massive = [4,-2,5,2]
    for (let i = 0; i < massive.length; i++) {
        const e = massive[i];
        sum = sum + e
    }
    return console.log(sum)
}

sumMas()*/

//Задача№4
/*
str = "5тр00f"
let arr = Array.from(str)

arr.forEach((e, i) => {

    if (e== '0'){
        arr[i] = '!'
    }
    if (e == '1'){
        arr[i] = '!'
    }
    if (e== '2'){
        arr[i] = '!'
    }
    if (e == '3'){
        arr[i] = '!'
    }    
    if (e== '4'){
        arr[i] = '!'
    }
    if (e == '5'){
        arr[i] = '!'
    }    if (e== '6'){
        arr[i] = '!'
    }
    if (e == '7'){
        arr[i] = '!'
    }    if (e== '0'){
        arr[i] = '!'
    }
    if (e == '8'){
        arr[i] = '!'
    }
    if (e == '9'){
        arr[i] = '!'
    }
}
)
console.log(arr); */

//Задача№5-----------
/*
m = [2,5,7,7,5]
m1 = []
for (let i = 0; i < m.length; i++) {
    const e = m[i];
    m1.push(e)
}

s = 0

ob = Math.floor(m.length/2)

proverka = 0 

if (m.length % 2 > 0){
    m1.sort(function(a,b){return a-b})
    for (let i = 0; i < m1.length; i++) {
        const e = m1[i];
        if (m1[i] == m1[i + 1]){
            s = s + 1
            if (s == ob ){
                proverka = proverka + 1
                
            }
        }
    }
    if (proverka == 1){
        console.log(`${m} - Является палиндромом`)
    }
}
else{
    console.log(`${m} - Не является палиндромом`)
}
*/
//Задача№6-----------
/*
a = [1,1,2,1,2]
a1 = []
d = 0
for (let i = 0; i < a.length; i++) {
    const e = a[i];
    a1.push(e)
}
a1.sort(function(a,b){return a-b})


for (let i = 0; i < a1.length; i++) {
    const e = a1[i];
    if (a1[i] == a1[i + 1]){
    }
    else if (a1[i] != a1[i + 1]){
        d = d + 1
    }

    
}
console.log(a, ` : ${d} - число дней для стройки`)
*/
//Задача№7-----------
/*
a = [1,2,3]
b = [2,2,5,2,2,1]
c = [3,3,7]
d = 0
q = 0
c = 0

a.forEach(element => {
    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        if (a[q] == b[i]){
            console.log("совпадение")
            d = d + 1
            console.log(d)
            c = c + b[i]
        }
        
    }
    q = q + 1

});
c = c + 1
console.log("Сумма повторяющихся элементов:",c)

*/
//Задача№8-----------
/*
stroka = 'Hello World'
console.log(stroka)
s = stroka.split(" ",)
b = []
b1 = []
for (let i = 0; i < s.length; i++) {
    const e = s[i];
    b.push(`${e}${e[0]}my`)
}
for (let i = 0; i < b.length; i++) {
    const e = b[i];
    b1.push(e.replace(e[0], ""))
}
console.log(b1.join(" "))

*/
//Задача№9-----------
/*
a = "даниил"
b = "нил"
a1 = 0
d = 0
for (let i = 0; i < b.length; i++) {
    const e = b[i];
    for (let i = 0; i < a.length; i++) {
        const e1 = a[i];
        if (e == a[i]){
            a1 = a1 + 1
        }
        
    }
}

if (a1 > b.length){
    console.log(`Из строки a может получитрся строка b`)
}
else{
    console.log(`Из строки a  НЕ может получитрся строка b`)
}
*/
//Задача№10-----------
///Задача №5 такая же
//Задача№11-----------
/*
a = [4,4]

mul = a[0] * a[1]

otvet = []

c = false

if (a[0] * a[1] % 2 == 0){
    console.log('четно')
    c = true
}

*/
//Задача№12-----------
/*

a = 'ььаааааааааааааакккы'
b = []
b1 = []

s1=0
s2=0
s3 = false

function getlongest(a){
    b = []
    for (let i = 0; i < a.length; i++) {
        const e = a[i];
        b.push(e)  
    }
    b1 = b.sort()
    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        if (b[i] == b[i + 1]){
            s1 = s1 + 1
        } 
        else{
            s2 = s2 + 1 
        }
        
    }
    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        if (b[0] == b[b.length-1]){
            s3 = true
        }
        
    }
    if (s3 == true){
        s2 = 1
    }

    return s2
}
console.log("Самая длинная подстрока состоит из:",getlongest(a), "символов")
*/

//Задача№13----------
/*
a = [2,3]
b = [1,2,3,4,5,6,7,8,9]
function getresult(a,b){
    t = 0
    d = true
    d1 = false
    a.forEach(element => {
        for (let i = 0; i < b.length; i++) {
            const e = b[i];
            if (element * element == b[i]){
                t = t  + 1
            }
        }
    });
    if (t == a.length){
        return d
    }
    else{
        return d1
    }
}
console.log(getresult(a,b))
*/