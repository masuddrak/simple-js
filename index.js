
let producs=[
    {name:'iphone', price:200},
    {name:'symphone phone', price:150},
    {name:'samsung phone', price:200},
    {name:'wach w3', price:210},
    {name:'wach w4', price:2000},
    {name:'gas lpg', price:1000},
    {name:'gas plg', price:400},
]
function seachProducts(producs,searchText){
    let seachProduct=[];
    for(const produc of producs){
        if(produc.name.includes(searchText)){
            seachProduct.push(produc);
        }
    }
    return seachProduct;
}
console.log(seachProducts(producs,'wach'));