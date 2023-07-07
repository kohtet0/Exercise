// declare
const inputOne = document.getElementById("one");
const inputTwo = document.getElementById("two");
const bOne = document.getElementById("b-one");
const bTwo = document.getElementById("b-two");
const bThree = document.getElementById("b-three");
const bFour = document.getElementById("b-four");
const finalResult = document.getElementById("finalResult");
const results = document.getElementById("results");

// solution
bOne.onclick = () => {
  const resultOne = inputOne.value * inputTwo.value;
  finalResult.innerText = `${inputOne.value} * ${inputTwo.value} = ${resultOne}`;
  inputOne.value = inputTwo.value = null;
};

bTwo.onclick = () => {
  const resultTwo = inputOne.value / inputTwo.value;
  finalResult.innerText = `${inputOne.value} / ${inputTwo.value} = ${resultTwo}`;
  inputOne.value = inputTwo.value = null;
};

bThree.onclick = () => {
  results.innerHTML += `<li>${finalResult.innerText}</li>`;
  finalResult.innerText = null;
};

bFour.onclick = () => {
  finalResult.innerText = null;
};
