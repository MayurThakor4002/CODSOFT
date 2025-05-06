let inputStr = "";
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const val = e.target.innerText;

    if (val === '=') {
      try {
        inputStr = eval(inputStr).toString();
      } catch {
        inputStr = "Error";
      }
    } else if (val === 'C') {
      inputStr = "";
    } else if (val === '+/-') {
      inputStr = inputStr.charAt(0) === '-' ? inputStr.slice(1) : '-' + inputStr;
    } else {
      inputStr += val;
    }

    document.querySelector('input').value = inputStr;
  });
});
