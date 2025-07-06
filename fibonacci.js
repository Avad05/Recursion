
function fibs(n){
    let  arr = [0, 1];
     let p = 0;
     let q = 1;
 
     for(let i = 1; i < n - 1; i++){
         let r = p + q;
         arr.push(r);
         p = q;
         q = r;
     }
     return arr;
 }
 
 console.log(fibs(4));
 
 
 
 function resfibs(n){
     
     if(n === 1){
         return [0];
     }
     if(n === 2){
         return [0, 1];
     }
     
     let recur = resfibs(n -1);
     let lastnum = recur[recur.length - 1] + recur[recur.length - 2];
     recur.push(lastnum);
     return recur;
     
     
 }
 
 console.log(resfibs(4));