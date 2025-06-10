
document.getElementById("download").addEventListener("click", function () {
  html2canvas(document.querySelector("#card")).then(canvas => {
    let link = document.createElement("a");
    link.download = "rajo_wish.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
