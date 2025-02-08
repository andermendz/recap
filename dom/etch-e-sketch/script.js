let sketchGrid = document.getElementById("sketch-grid");
let button = document.querySelectorAll("button");
let inputColor = document.getElementById('input-color')
let optionsGrid = document.getElementById('options-grid')

let gridTen = document.getElementById("10");
let gridTwent = document.getElementById("20");
let gridThird = document.getElementById("30");
let gridFour = document.getElementById("40");
let gridFif = document.getElementById("50");

renderGrid(30);

function renderProportions(){
  proportions = [10,30,50,70,100]

  proportions.forEach((proportion)=>{

    proportionToggle = document.createElement('button');
    proportionToggle.id = proportion;
    proportionToggle.classList.add('grid-proportion')
    
    proportionToggle.onclick = () =>{
      renderGrid(proportion)
    }


    proportionToggle.innerHTML = ` ${proportion} X ${proportion}`
    optionsGrid.append(proportionToggle)
  }) 
}

renderProportions()
function renderGrid(proportion) {
  sketchGrid.innerHTML = "";
  var gridProportion = proportion;
  var proportionRatio = gridProportion * gridProportion;

  for (let i = 0; i <= proportionRatio; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.id = `square-${i}`;
    sketchGrid.appendChild(square);
  }
  sketchGrid.style.gridTemplateColumns = `repeat(${gridProportion},  1fr)`;
  sketchGrid.style.gridTemplateRows = `repeat(${gridProportion}, 1fr)`;

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



// todo - minimal and adaptative grid, better color picking, transitions, improved UI, fractional options