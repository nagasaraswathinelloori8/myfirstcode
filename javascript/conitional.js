let x=[1,2,3,4,5,6,7,8,9,10];
let c=0
let nc=0
for(let i of x){

    if(i%2==0){
          c+=1 
    }
    else{
        nc+=1
    }
console.log(c);
console.log(nc);
}// else if{}