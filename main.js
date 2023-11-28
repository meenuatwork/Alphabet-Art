let container = document.querySelector(".container");
let alphabet;
for (let i = 65; i <= 90; i++) {
  alphabet = String.fromCharCode(i);
  let frontDiv = document.createElement("div");
  frontDiv.classList.add("front-div");
  container.appendChild(frontDiv);
  frontDiv.innerHTML = alphabet;
  let backDivs = document.createElement("div");
  backDivs.classList.add("back-div");

  let flipContainer = document.createElement("div")
  flipContainer.classList.add("flip-div")
  container.appendChild(flipContainer)

  flipContainer.appendChild(frontDiv);
  flipContainer.appendChild(backDivs)

  flipContainer.addEventListener("click", () => {
    flipContainer.classList.toggle("flipped")
  })

}
