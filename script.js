const count = document.querySelector("#count");
const decreaseButton = document.querySelector("#decreaseCount");
const increaseButton = document.querySelector("#increaseCount");

const result = await fetch("./.netlify/functions/getCount");
const parsedResult = await result.json();

count.innerHTML = parsedResult.amount;

decreaseButton.addEventListener("click", async () => {
  const result = await fetch("./.netlify/functions/decreaseCount");
  const parsedResult = await result.json();
  count.innerHTML = parsedResult.amount;
});

increaseButton.addEventListener("click", async () => {
  const result = await fetch("./.netlify/functions/increaseCount");
  const parsedResult = await result.json();
  count.innerHTML = parsedResult.amount;
});
