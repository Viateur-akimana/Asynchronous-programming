let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquids: ["water","ice"],
    holder: ["cone","cup","sticks"],
    toppings: ["chocolate","peanuts"]
}
let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
        setTimeout(resolve, ms)
            
        }
        else{
            reject( console.log("the shop is not opened"));
        }
    })
}

async function order() {
    try {
        await time(2000)
        console.log(`the ${stocks.fruits[0]} was selected`);
        await time(2000)
        console.log("the production has started")
        await time(2000)
        console.log("the fruits have been chopped")
        await time(2000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} is added to the production process`)
        await time(2000)
        console.log(`the ${stocks.holder[0]} is selected as the container`)
        await time(2000)
        console.log("serve the ice cream  to the customer")
    } catch (error) {
        console.log("serve the ice cream  to the customer")
    }
}
order();









