let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquids: ["water","ice"],
    holder: ["cone","cup","sticks"],
 toppings: ["chocolate","peanuts"]
}
let is_shop_open=true;

let order=(time,work)=>{
return new Promise((resolve, reject) => {
    if (is_shop_open) {
        setTimeout(() => {
            resolve(work())  
        }, 2000);
    }
    else{
        reject(console.log("the shop is closed"))
    }
})
}
order(2000,()=>{
    console.log(`the ${stocks.fruits[0]} was selected`);
})
.then(()=>{
    return order(2000,()=>{
        console.log("the production has started")
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("the fruits have been chopped")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} is added to the production process`)
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`the ${stocks.holder[0]} is selected as the container`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("serve the ice cream  to the customer")
    })
})
.catch(()=>{
    console.log("serve the ice cream  to the customer")
})
.finally(()=>{
    console.log("the day ended , and the shop is now closed");
})