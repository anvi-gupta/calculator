function add(){
    var num1=parseInt(document.getElementById("first").value);
    var num2=parseInt(document.getElementById("second").value);
    document.getElementById("ans").innerHTML=num1+num2;
}
function sub(){
    var num1=(document.getElementById("first").value);
    var num2=(document.getElementById("second").value);
    document.getElementById("ans").innerHTML=num1-num2;
}
function mul(){
    var num1=(document.getElementById("first").value);
    var num2=(document.getElementById("second").value);
    document.getElementById("ans").innerHTML=num1*num2;
}
function div(){
    var num1=(document.getElementById("first").value);
    var num2=(document.getElementById("second").value);
    document.getElementById("ans").innerHTML=num1/num2;
}