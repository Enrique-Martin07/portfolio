const inputCalcu = document.getElementById("display");

function appendDisplay(num) {
  inputCalcu.value += num;
}

function calcu(num) {
  try {
    inputCalcu.value = eval(inputCalcu.value);
  } catch (error) {
    inputCalcu.value = "error click C";
  }
}
function detall() {
  inputCalcu.value = "";
}
//! attention
//? question
// TODO tâche
//* surlignage
//// Ancien code de teste
