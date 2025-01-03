let sketchGrid = document.querySelector("#sketch-grid");

var gridProportions = 20;
var proportionsRatio = gridProportions * gridProportions;

sketchGrid.style.gridTemplateColumns = `repeat(${gridProportions}, 1fr)`;
sketchGrid.style.gridTemplateRows = `repeat(${gridProportions}, 1fr)`;

for (let i = 0; i <= proportionsRatio; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.id = `square-${i}`
  sketchGrid.appendChild(square);

  var squares = document.querySelectorAll(".square");
}

squares.forEach((square) => {
  console.log("asas");
  square.onclick = (e) => {
    console.log("s");
  };
});
