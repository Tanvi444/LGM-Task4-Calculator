const userInput =  document.querySelector("#user_input");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = userInput.value;
}

erase = () => {
  expression = "";
  userInput.value = expression;
}
back = () => {
  expression =expression.slice(0,-1);
  userInput.value = expression;
}