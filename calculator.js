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
document.addEventListener('keyup',function(event){
const key = event.key;
if(/[0-9]/.test(key) || /[\-\+\*\/]/.test(key)){    
    input = input+key;
    document.getElementById("screen").value=input;  
}
else if(key=='Enter'){  
    equal();
}
else if(key=='Backspace'){
    deleteInput();
}
else if(key=='Delete'){
    clearInput();
}})

function bin2dec(){
   
    input = document.getElementById("screen").value;
   const result = parseInt(input,2).toString(10);
     document.getElementById("screen").value = result;
      
 // return parseInt(bin,2).toString(10);
}
function dec2bin(){
    input = document.getElementById("screen").value;
    document.getElementById("screen").value= (input>>>0).toString(2);
 // return (dec>>>0).toString(2);
}
function sin(){
    input = document.getElementById("screen").value;
   input = "sin("; 
   document.getElementById("screen").value= input;

}