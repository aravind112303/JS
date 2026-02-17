let x=10;
function global() {
    console.log(x);
}
global();

function func() {
    var a =10;
}
console.log(a);  //Error

{
    let a =20;
    const b=10;
}
console.log(a,b); //error

if(true) {
    var y=10;
}
console.log(y); //10



