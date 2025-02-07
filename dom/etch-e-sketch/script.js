let sketchGrid = document.getElementById("sketch-grid");
let button = document.querySelectorAll("button");
let inputColor = document.getElementById('input-color')

let gridTen = document.getElementById("10");
let gridTwent = document.getElementById("20");
let gridThird = document.getElementById("30");
let gridFour = document.getElementById("40");
let gridFif = document.getElementById("50");

renderGrid(30);

function renderGrid(proportions) {
  sketchGrid.innerHTML = "";
  var gridProportions = proportions;
  var proportionsRatio = gridProportions * gridProportions;

  for (let i = 0; i <= proportionsRatio; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.id = `square-${i}`;
    sketchGrid.appendChild(square);
  }
  sketchGrid.style.gridTemplateColumns = `repeat(${gridProportions}, 1fr)`;
  sketchGrid.style.gridTemplateRows = `repeat(${gridProportions}, 1fr)`;

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mousemove", (e) => {
      if (isMouseDown) {
        console.log(square.id);
        square.style.backgroundColor = inputColor.value;
      }
    });
  });
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

button.forEach((btn) => {
  btn.onclick = () => {
    console.log("click click");
  };
});

gridTen.onclick = () => {
  renderGrid(10);
};

gridTwent.onclick = () => {
  renderGrid(20);
};

gridThird.onclick = () => {
  renderGrid(30);
};

gridFour.onclick = () => {
  renderGrid(40);
};

gridFif.onclick = () => {
  renderGrid(50);
};


// todo - minimal and adaptative grid, better color picking, transitions, improved UI, fractional options