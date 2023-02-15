let turn = "X";
let items = document.querySelectorAll(".game div");
let title = document.querySelector(".title");
let squares = [];
let abc = "";
items.forEach(function (item) {
  item.addEventListener("click", function () {
    if (turn == "X" && item.innerHTML == "" && abc == "") {
      item.innerHTML = "X";
      turn = "O";
      title.innerHTML = "O";
    } else if (turn == "O" && item.innerHTML == "" && abc == "") {
      item.innerHTML = "O";
      turn = "X";
      title.innerHTML = "X";
    }
    winner();
  });
});
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[3] !== ""
  ) {
    coco(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[6] != ""
  ) {
    coco(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] !== ""
  ) {
    coco(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[7] != ""
  ) {
    coco(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[8] !== ""
  ) {
    coco(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != ""
  ) {
    coco(3, 6, 9);
  }
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[9] !== ""
  ) {
    coco(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[7] != ""
  ) {
    coco(3, 5, 7);
  }
}
function coco(a, b, c) {
  document.querySelector(`#item${a}`).classList.add("active");
  document.querySelector(`#item${b}`).classList.add("active");
  document.querySelector(`#item${c}`).classList.add("active");
  abc = "stop";
  title.innerHTML =
    document.querySelector(`#item${a}`).innerHTML + "  " + "WINNER";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}
