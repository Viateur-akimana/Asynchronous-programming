let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquids: ["water","ice"],
    holder: ["cone","cup","sticks"],
    toppings: ["chocolate","peanuts"]
}
let order = (fruits_name,call_production) =>{
setTimeout(() => {
    console.log(`${stocks.fruits[fruits_name]} was selected`);
    call_production()
}, 2000);
}
let production = () =>{
setTimeout(() => {
 console.log("production started");
    setTimeout(()=>{
       console.log("fruits have been choppped");

        setTimeout(() => {
           console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} is added to the production process`);

             setTimeout(() => {
               console.log("start the machine"); 
                
               setTimeout(() => {
                console.log(`the ${stocks.holder[0]} is selected as the container`);

                setTimeout(() => {
                    console.log(`the ${stocks.toppings[0]} is selcted as the toppings`);

                    setTimeout(() => {
                        console.log("serve the icecream to the customer");
                    }, 2000);
                }, 2000);
               }, 2000);
             }, 2000);     
        }, 1000);
     },1000)
}, 1000);
}
order(0,production)
