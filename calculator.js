var textInput = "";
function operation(value){
textInput +=value;
document.getElementById("screen").value= textInput;
}
function equal(){
    var result = eval(textInput);
    document.getElementById("screen").value= result;
}
function clearInput(){
    textInput="";
    document.getElementById("screen").value= textInput;
}