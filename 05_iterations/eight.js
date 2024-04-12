//reduce
const myNum=[1,3,5]
const myTotal=myNum.reduce((acc,cur_val)=> {
    console.log(`acc val is ${acc}`);
    return acc+cur_val},0)
console.log(myTotal);//reduce can be for calculating the total val of the array

//calculating the total amount of product when the original price and discount price of the products are present  
 const myProducts=[100,200,300]
 const myProductsDiscount=[50,100,150]
 const myProductsTotal=myProducts.reduce((acc,cur_val)=>cur_val+acc,0)+myProductsDiscount.reduce((acc,cur_val)=>acc-cur_val,0)
console.log(myProductsTotal);

const shoppingCart=[
    {
        itemName:"js",
        price:599
    },
    {
        itemName:"ruby",
        price:1599
    },
    {
        itemName:"data science",
        price:999
    },
    {
        itemName:"rust",
        price:6599
    }
]
 const total_price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(total_price);