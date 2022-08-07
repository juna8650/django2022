function doSomething(){
    let num1 = document.getElementById("inputA").value;
    /*alert(a)*/
    let num2 = document.getElementById("inputB").value;

    document.getElementById("valueA").innerHTML = num1;
    document.getElementById("valueB").innerHTML = num2;
    /*document.getElementById("valueC").innerHTML = num1 + num2;*/
    document.getElementById("valueC").innerHTML = Number(num1) + Number(num2);
}    
