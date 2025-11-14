const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"html course",
        price:999
    },
    {
        itemName:"py course",
        price:3999
    },
    {
        itemName:"java course",
        price:4999
    },
    {
        itemName:"data science course",
        price:12999
    }
]
const total=shoppingCart.reduce((acc,items)=> acc+items.price,0)
console.log(total)

