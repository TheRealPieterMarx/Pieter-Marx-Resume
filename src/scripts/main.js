document.getElementById("footer-copyright").innerHTML =
  "© " + new Date().getFullYear() + " Pieter Marx. All Rights Reserved.<br/>(Not really.. ;D)";

function printResume() {
  window.print();
}

function downloadResume() {
  const resumePath = "https://TheRealPieterMarx.github.io/Pieter-Marx-Resume/assets/docs/Pieter Marx Resume.pdf";
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "Pieter Marx Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


document.getElementById("download").addEventListener("click", function (event) {
  event.preventDefault();
  downloadResume();
}); 