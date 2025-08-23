function generateShape() {
  let input = document.getElementById("shapeInput").value.toLowerCase();
  let shapeDiv = document.getElementById("shape");

  // clear any previous shape
  shapeDiv.innerHTML = "";

  let shapeElement = document.createElement("div");

  if (input === "circle") {
    shapeElement.classList.add("circle");
  } else if (input === "square") {
    shapeElement.classList.add("square");
  } else if (input === "triangle") {
    shapeElement.classList.add("triangle");
  } else {
    shapeDiv.textContent = "Unknown shape! Try circle, square, or triangle.";
    return;
  }

  shapeDiv.appendChild(shapeElement);
}