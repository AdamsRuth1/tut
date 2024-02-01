
let num1 = 80
let num2 = 40
document.getElementById("num1").innerText = num1
document.getElementById("num2").innerText = num2
let result = document.getElementById("sum")

function add(){
    let sum = num1 + num2
    result.innerText = "Sum:  " + sum
    console.log(sum)
}

function sub(){
    let sum = num2 - num1
    //this displays this result
    result.innerText = "Sum: " + sum
    console.log(sum)
} 

function div(){
    let sum = num2 / num1
    result.innerText = "Sum: " + sum
    console.log(sum)
} 

function multiplicatio(){
    let sum = num2 * num1
    result.innerText = "Sum: " + sum
    console.log(sum)
} 