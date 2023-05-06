let pO = 2 //pO-Переменная один, let - изменяемая переменная 
pO = 2

const pO2 = 1 // const - постоянная переменная 

const a = "Строка" //string тип данных
const b = 100 //number тип данных
const c = 200
const pO5 = true //boolean тип данных
const pO55 = false //boolean тип данных
const pO6 = undefined //неопределённый тип данных
const pO7 = null //значение переменной отсутствует

let r = [1,2,3] //массив
const func = () => {} //функция


const o = {
    c: false
}

const cat = {
    action: () => {}
}



console.log(o.c) //вызвать свойство с переменной о

console.log(typeof o.c) // выводит тип данных переменной

console.log(!!a) // !! - проверяет присуствует ли значение в переменной !! - есть ли значение ! - нет ли значения

let aa = 'm' // s | m

const aaa = (aa === 'm')? c - b: c + b // если переменная аа = м то c-b : если переменная не равна m то c+b
//const aaa = (aa === 'm') && c - b // если нужно одно следствие из условия то используется && иначе ложь

let a4 = null

if (!!a) {  //если данные в переменной а существуют то...{}
    console.log("! ! ! ! !")
}

if (a == "Строка"){ // == - неявное сравнение, === явное сравнение
    console.log(a)
}

if (!(a === b)){
    console.log(a,b)
}

if (b < c){ // >= - больше или равно =< - меньше или равно
    console.log(b, "<", c)
}

if (pO5 || pO55){
    console.log("одно из выражений pO5 или pO55 - истина (база)")
}

console.log(aaa)

for (let i = 0; i < r.length; i++) {
    const e = r[i];
    
    console.log(e)
}

r.forEach(ri => console.log(ri)) // для каждого элемента r выполнять то что в скобках
r.map(ri => console.log(ri + 10)) //map - перебирает элементы массива и изменяет их
rr = r.map(ri => ri + 100)
console.log(rr)

console.log("-----------задача------------")

let m = [8,1,4,5,6,74,1325,2,2,4]
let m2 = [7,1,3,5,6,12,43]

function getMax(m) {


    
    let max = m[0]

    for (let i = 0; i< m.length; i++) {
    const e = m[i];
    if (max < m[i]){
        max = m[i]
    }
    }

    return m.sort((a,b) => b -a )[0]//альтернативное решение через сортировку массива


}


console.log(getMax(m2))





