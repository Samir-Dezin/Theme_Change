const themeDL = () => {
  let x = document.getElementById("html");
  let y = document.getElementById("icon");
  let currentTheme = x.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    x.setAttribute("data-bs-theme", "light");
    y.setAttribute("src", "moon.png");
    y.setAttribute("title", "Change to dark theme.");
    y.setAttribute("width", "25px");
  } else {
    x.setAttribute("data-bs-theme", "dark");
    y.setAttribute("src", "sun.png");
    y.setAttribute("title", "Change to light theme.");
    y.setAttribute("width", "30px");
  }
};

