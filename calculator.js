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
    console.log(input);
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
}

}
)

// chat gpt:
// <input type="text" id="calculator-screen" readonly>

// // Get the calculator screen element
// const calculatorScreen = document.getElementById("calculator-screen");

// // Set up event listeners for keyboard inputs
// document.addEventListener("keydown", function(event) {
//   // Get the pressed key
//   const key = event.key;
  
//   // Check if the key is a number or operator
//   if (/[0-9]/.test(key) || /[\+\-\*\/]/.test(key)) {
//     // Add the pressed key to the calculator screen
//     calculatorScreen.value += key;
//   }
//   // Check if the key is the equals sign
//   else if (key === "=" || key === "Enter") {
//     // Evaluate the expression on the calculator screen
//     const result = eval(calculatorScreen.value);
//     // Display the result on the calculator screen
//     calculatorScreen.value = result;
//   }
//   // Check if the key is the clear button
//   else if (key === "c" || key === "C") {
//     // Clear the calculator screen
//     calculatorScreen.value = "";
//   }
// });
