// Your code here
dodger = document.getElementById('dodger');

dodger.style.backgroundColor = 'red';
dodger.style.height = '100px';
dodger.style.bottom = '100px';

// document.moveDodgerDown("keydown", function(e) {
//     if (e.key === "ArrowDown") {
//       let numbers = dodger.style.bottom.replace("px", "");
//       let height = parseInt(numbers, 10);
   
//       dodger.style.bottom = `${height - 1}px`;
//     }
//   });


//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right > 0) {
        dodger.style.left = `${right + 5}px`;
    }
};
  
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  };

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
     }
  });


