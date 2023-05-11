let x=[1,2,3,4,5,6,7,8]
x.push(9)
x.pop(8)
let obj={name:"nagasaraswathi", age:22};
obj[name]="swetcha";
console.log(obj);
//spread operator used to unpack elemrnts//
//rest operator used to pack elements//
let y=[4,5];
let z=[6,7];
let k=[...y,...z];
console.log(k);
