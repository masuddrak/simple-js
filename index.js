// recursion
function recursion(i){
    if(i>10){
        return;
    }
    console.log(i);
    recursion(i+1)
}
recursion(1);