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
str = "0тр00f"
let arr = Array.from(str)
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (arr[e] == 0){
        console.log(0)
        arr[e] = "!"
    }
    if (arr[e] == 1){
        console.log(1)
        arr[e] = "!"
    }
    else if(arr[e] == 2){
        console.log(2)
        arr[e] = "!"
    }
    if (arr[e] == 3){
        console.log(3)
        arr[e] = "!"
    }
    else if(arr[e] == 4){
        console.log(4)
        arr[e] = "!"
    }
    if (arr[e] == 5){
        console.log(1)
        arr[e] = "!"
    }
    else if(arr[e] == 6){
        console.log(2)
        arr[e] = "!"
    }
    if (arr[e] == 7){
        console.log(1)
        arr[e] = "!"
    }
    else if(arr[e] == 8){
        console.log(2)
        arr[e] = "!"
    }
    if (arr[e] == 9){
        console.log(1)
        arr[e] = "!"
    }

}