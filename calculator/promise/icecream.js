
//making ice cream using callbacks
let stocks = {
    fruits : ['orange', 'banana', 'mango'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'strawberry', 'vanilla']
} 

let shop_open = true

let order = (time, work)=>{
    return new Promise((resolve, reject)=>{
        if(shop_open){

            setTimeout(()=>{
                resolve (work())

            }, time)
        }else {
            reject (console.log("sorry the shop is closed"))
        }
    })
}
// order(2000,()=>{console.log(` ${stocks.fruits[2]} was selected`)})
order(2000,()=>{})

.then(()=>{
    return order(2000, ()=>{console.log(`${stocks.fruits[2]} has been selected`)})
})