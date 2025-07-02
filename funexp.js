function welcomeMessage(){
    console.log("welcome to mrecw");
}
function add(a,b){
    return a+b;
}
welcomeMessage();
console.log(add(10,20));
const sub=(a,b)=>(a-b);//arrow function for without parameters
console.log(sub(5,2));
const message=()=>("welcome guys");
console.log(message());