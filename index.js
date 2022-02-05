// recursion
function recursion(i){
    if(i<=1){
        return 1;
    }
  return i+recursion(--i);
}
console.log(recursion(5));