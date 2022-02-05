
let producs=[
    {name:'iphone', price:4000},
    {name:'symphone phone', price:15000},
    {name:'samsung phone', price:200},
    {name:'wach w3', price:210},
    {name:'wach w4', price:2000},
    {name:'gas lpg', price:1000},
    {name:'gas plg', price:400},
]
for(const product of producs){
    if(product.price<2000){
        continue;
    }
    console.log(product);
}