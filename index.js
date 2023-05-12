var squares = document.getElementsByClassName("square");
var offsetXs = [], offsetYs = [];

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("dragstart", dragStart);
  squares[i].addEventListener("dragend", dragEnd);
}

function dragStart(e) {
  var square = e.target;
  offsetXs.push(e.clientX - square.offsetLeft);
  offsetYs.push(e.clientY - square.offsetTop);
}

function dragEnd(e) {
  var square = e.target;
  square.style.left = e.clientX - offsetXs.shift() + "px";
  square.style.top = e.clientY - offsetYs.shift() + "px";
}
