module.exports = function getZerosCount(number, base) {
  
  let num = number;
  
  for(let i = 2; i <= base; i++){
    
    let a = 0;
      
    while(base % i == 0){
        a++;
        base = Math.floor (base/i); }


    let b = 0;
    
    let  num2 = number;
    
    while (num2/i > 0){
        b = b + Math.floor(num2/i);
        num2 = Math.floor(num2/i);
    }
    if(num > b/a){ num=b/a;} 

}
return Math.floor(num);

}