let sketchGrid = document.querySelector("#sketch-grid");
let button = document.querySelectorAll("button");

var gridProportions = 30;
var proportionsRatio = gridProportions * gridProportions;

sketchGrid.style.gridTemplateColumns = `repeat(${gridProportions}, 1fr)`;
sketchGrid.style.gridTemplateRows = `repeat(${gridProportions}, 1fr)`;

for (let i = 0; i <= proportionsRatio; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.id = `square-${i}`;
  sketchGrid.appendChild(square);

  var squares = document.querySelectorAll(".square");
}

let isMouseDown = false;

document.addEventListener("mousedown", (e) => {
  e.preventDefault();
  if (e.button === 0) {
    isMouseDown = true;
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

squares.forEach((square) => {
  square.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      console.log(square.id);
      square.style.backgroundColor = '#0000';
    }
  });
});

button.forEach((btn) => {
  btn.onclick = () => {
    console.log("click click");
  };
});
