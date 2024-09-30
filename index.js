document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const skill = document.getElementById("skill").value;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Halo, ${name}! Kamu memilih ${skill}.`;

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const aboutH2 = document.querySelector(".about h2");
  const skillH2 = document.querySelector(".skill h2");
  const demoH2 = document.querySelector(".interactive-demo h2");

  let color;
  if (skill === "HTML") {
    color = "var(--primary)";
  } else if (skill === "CSS") {
    color = "var(--color-css)";
  } else if (skill === "JavaScript") {
    color = "var(--color-js)";
  }

  header.style.backgroundColor = color;
  footer.style.backgroundColor = color;
  aboutH2.style.color = color;
  skillH2.style.color = color;
  demoH2.style.color = color;
});
