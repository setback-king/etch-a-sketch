
// constant variables 
const container = document.querySelector('.container');
const btn = document.querySelector('.clear');


function buildGrid (squares) {
    for (let i = 0; i < squares; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < squares; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.width = (960 / squares) + "px";
            box.style.height = (960 / squares) + "px";
            row.appendChild(box);
        }
        container.appendChild(row);
    }

   hover();
}

function reset() {
    document.querySelectorAll(".row").forEach((e) => e.parentNode.removeChild(e));
  }

// this function changes background color of div when mouse hovers over it
function hover(){
    let hoverBox = document.querySelectorAll('.box');
    hoverBox.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = randomColor();
        });
    });
};


// random color function
function randomColor() {
    let red = Math.floor(Math.random()* 256);
    let green = Math.floor(Math.random()* 256);
    let blue = Math.floor(Math.random()* 256);
    return "rgb(" + red + "," + green + "," + blue + ")";
    
}

// event listener to create new grid and reset div backgrounds 
btn.addEventListener('click', () => {
    let newGrid;
    // while loop checks for input by user to ensure it meets conditions 
    while (true) {
    newGrid = prompt('How many squares per side?', "")
     if (newGrid > Number(0) && newGrid <= Number(100)) {
         break;
     }
        else if (newGrid >= Number(101) || (newGrid <= 0)) {
                alert("Sorry, please pick a number that is >0 and <=100");
            }
        else if (newGrid != Number) {
                alert("Please enter a valid number!");
        }
    }
    
    reset();
    buildGrid(newGrid);
    
});


// calls function upon startup to build original 16X16 grid
buildGrid(16);
