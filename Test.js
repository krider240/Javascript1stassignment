console.log("Finding if the number is Odd or even using Modulo");
console.log(" ");
console.log("Using Function with Paramter");
let n=117;
var isPrime=true;
let b;
let c;
function a(b){
    let c=b%2;
    let sqrt;
    if(c==0){   
        console.log("The number "+ b+" is even");
    }
    else{
        console.log("The number "+ b+" is odd");
    }
    sqrt=Math.sqrt(b);
    console.log("The square root of "+b+ " is "+sqrt);

}
a(7);   
console.log(" ");
console.log("Using Function with reference");
var aa=function(){
    let bb=5;
    let cc=bb%2;
    let sqrt;
    if(cc==0)
    {
        console.log("The number "+ bb+" is even");
    }
    else{
        console.log("The number "+ bb+ " is odd");
    }
    sqrt=Math.sqrt(bb);
    console.log("The square root of "+ bb+ " is "+sqrt);
}
aa();
console.log("");
console.log("Using Arrow Function");

var aaa=()=>{
    let bb=4;
    let ccc=bb%2;
    let sqrt;
    if(ccc==0)
    {
        console.log("The number "+ bb+ " is even");
    }
    else{
        console.log("The number "+ bb+ " is odd");
    }
    sqrt=Math.sqrt(bb);
    console.log("The square root of "+bb+ " is "+sqrt);
}
aaa();

console.log("")
console.log("Check if the number is Prime or not, using For Loop.")

if(n<2)
console.log("The number is not prime");
for(let i=2;i<n;i++){
    if(n%i==0){
        isPrime=false;
    }
}
if(isPrime==true){
    console.log("The number "+ n+" is a Prime Number");

}
else{
    console.log("The number "+ n+" is not a Prime number");
}



