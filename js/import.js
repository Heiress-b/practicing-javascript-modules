let myMenu = require ("./export.js")
// console.log(myMenu)

for(let i=0; i<myMenu.myKitchen.length; i++) {
    let menu = myMenu.myKitchen[i]
    let meal = menu.name
    let productsInStock = menu.availability
    let price = menu.price

    if (productsInStock == true && price > 10) {
        console.log(`dear customer, as a result of your patronage, you now have a discount of 5 subtracted from your main purchase.`)
    }
}

