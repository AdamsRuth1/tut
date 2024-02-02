
//making ice cream using callbacks
let stocks = {
    fruits : ['orange', 'banana', 'mango'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'strawberry', 'vanilla']
} 
// console.log(stocks)

function order(call_production){
    setTimeout(()=>{
        console.log(`${(stocks.fruits[2]) }  was selected `)
        call_production()
    },2000)
    
    
}

function production(){
    setTimeout(() => {
        console.log(' order received production started')
        setTimeout(()=>{
console.log("the fruit is chopped")
        },2000)
    }, 1000)
}

order(production)