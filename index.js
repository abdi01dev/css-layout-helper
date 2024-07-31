function outlineOnHover() {
  document.body.classList.toggle("outlineOnHover");
}

function greenBox() {
  document.body.classList.toggle("greenBox");
}

function greenBoxOnHover() {
  document.body.classList.toggle("greenBoxOnHover");
}

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      document.body.classList.toggle("outline");
      break;
    case "b":
      outlineOnHover();
      break;
    case "c":
      greenBox();
      break;
    case "d":
      greenBoxOnHover();
      break;
  }
});
