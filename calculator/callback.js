function sum(call_mult, call_div){
    console.log("sum is successful")
    call_mult(5,7)
    call_div()
    }
    function mult(a, b){
        let result = a * b
        console.log(`multiplication is ${result}`)
    }
    function div(){
        console.log("division is not successful")
    }
    sum(mult, div)