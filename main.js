var bigNum = ( num1 , num2) => {
    if (num1 < num2){
        console.log(num1 +" " + " Это меньше")
    }else{
        console.log(num2 + " " + " Это меньше")
    }
}
bigNum( 6,5 )

var textRequest = prompt(" Введите текст")
var texstLength = (data) => {
    console.log(data.length)
}
texstLength(textRequest)

var calculator = (num1, num2, operation) => {
    if (operation === "+") {
        console.log(num1 + num2)
    }else if (operation === "-") {
        console.log(num1 - num2)
    }else if (operation === "*") {
        console.log(num1 * num2)
    }else if (operation === "/") {
        if(num2 === 0) {
            console.log("error")
        }else{
            console.log(num1 / num2)
        }
    }
}
calculator( 10,0,"/");


//test