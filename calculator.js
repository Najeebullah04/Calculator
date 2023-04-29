let input ="";
function operation(value){
    input +=value;
    document.getElementById("screen").value=input;
}
function equal(){
    input = eval(input);
    document.getElementById("screen").value =input;
}
function clearInput(){
    input="";
    document.getElementById("screen").value=input;
}
function deleteInput(){
 input = input.slice(0,-1);
document.getElementById("screen").value= input;

}