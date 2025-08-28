const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  const btn = e.target;
  const val = btn.getAttribute("data-value");
  const fn = btn.getAttribute("data-func");

  if (val) {
    display.value += val;
  } else if (fn) {
    switch (fn) {
      case "clear":
        display.value = "";
        break;
      case "delete":
        display.value = display.value.slice(0, -1);
        break;
      case "calculate":
        calculate();
        break;
      case "sin":
        applyFn("sin");
        break;
      case "cos":
        applyFn("cos");
        break;
      case "tan":
        applyFn("tan");
        break;
      case "log":
        applyFn("log10");
        break;
      case "sqrt":
        applyFn("sqrt");
        break;
      case "pi":
        display.value += Math.PI.toFixed(8);
        break;
      case "e":
        display.value += Math.E.toFixed(8);
        break;
    }
  }
});

function applyFn(fn) {
  try {
    const val = parseFloat(display.value);
    if (!isNaN(val)) {
      let res;
      switch (fn) {
        case "sin":
          res = Math.sin(val);
          break;
        case "cos":
          res = Math.cos(val);
          break;
        case "tan":
          res = Math.tan(val);
          break;
        case "log10":
          res = Math.log10(val);
          break;
        case "sqrt":
          res = Math.sqrt(val);
          break;
      }
      display.value = res;
    } else {
      display.value = "Error";
    }
  } catch {
    display.value = "Error";
  }
}

function calculate() {
  try {
    let expr = display.value.replace(/÷/g, "/").replace(/×/g, "*");

    const result = eval(expr);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
