let selectedImage = 'card1.png';

function selectCard(imageName) {
  selectedImage = imageName;
  document.getElementById("selectedCard").src = `images/${imageName}`;

  document.querySelectorAll(".card-selector img").forEach(img => {
    img.classList.remove("selected");
    if (img.src.includes(imageName)) img.classList.add("selected");
  });
}

function generateCard() {
  const name = document.getElementById("nameInput").value || "Your Friend";
  document.getElementById("greetingText").innerText = `Happy Rajo from ${name}!`;
}

function shareOnWhatsApp() {
  html2canvas(document.getElementById("greetingCard")).then(canvas => {
    const image = canvas.toDataURL("image/png");
    const blob = dataURLToBlob(image);
    const file = new File([blob], "rajo-greeting.png", { type: "image/png" });

    const data = new FormData();
    data.append("file", file);

    const waLink = `https://api.whatsapp.com/send?text=🌸 Happy Rajo! Made a greeting for you: [link or download image manually]`;
    window.open(waLink, "_blank");
  });
}

function dataURLToBlob(dataurl) {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--) u8arr[n] = bstr.charCodeAt(n);
  return new Blob([u8arr], {type:mime});
}
