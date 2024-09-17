let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
console.log(arr);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        // If the string is empty or the result is undefined, set input to 0
        string = eval(string) || "0";
      } catch {
        // If eval fails, also set input to 0
        string = "0";
      }
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
