let screen = document.querySelector("#screen")
let btn = document.querySelectorAll("#btn");
let screenValue = '';

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    
    if (btnText == 'x') {
      btnText = '*';
      screen.value += btnText;
    }

    else if (btnText == '÷') {
      btnText = '/';
      screen.value += btnText;
    }

    else if (btnText == 'CE') {
      screenValue = '';
      screen.value = screenValue;
    }

    else if (btnText == 'AC') {
      backspace = screen.value;
      screenValue = backspace.slice(0, -1);
      screen.value = screenValue;
    }

    else {
      screen.value += btnText;
    }
  })
}

document.getElementById("equal").addEventListener("click", () => {
  screen.value = eval(screen.value);
})




