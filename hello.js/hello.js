const v1 = "Hello"
const v3= "Das"

function print(v1){
    const v2= "Sashreek"
    console.log(v1+v2);
}
print(v1)

const printStatement = (v1) => {
    const v2= "Sashreek"
    console.log(v1+v2);
}
printStatement(v1);

(print(v1)+console.log(v3));
(printStatement(v1)+v3);

// console.log(console.log("hello"))