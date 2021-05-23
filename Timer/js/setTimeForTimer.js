document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("increment") ||
    e.target.classList.contains("decrement")
  ) {
    const valContainer = e.target.parentNode;
    const btn = e.target;
    if (btn.className === "increment") {
      const para = valContainer.children[1];
      if (para.className === "times-hr" && para.textContent === "23")
        para.textContent = `00`;
      else if (
        (para.className === "times-min" || para.className === "times-sec") &&
        para.textContent === "59"
      )
        para.textContent = `00`;
      else para.textContent = `${Number(para.textContent) + 1}`.padStart(2, 0);
    }
    if (btn.className === "decrement") {
      const para = valContainer.children[1];
      if (para.className === "times-hr" && para.textContent === "00")
        para.textContent = `23`;
      else if (
        (para.className === "times-min" || para.className === "times-sec") &&
        para.textContent === "00"
      )
        para.textContent = `59`;
      else para.textContent = `${Number(para.textContent) - 1}`.padStart(2, 0);
    }
  }
});
