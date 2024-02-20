export const createDiv = (element: any, FEP: number) => {
  const parentDiv = document.querySelector(".FEPprogress");

  if (parentDiv) {
    const childDiv = document.createElement("div");
    childDiv.style.height = `100%`;
    const barPercentage = ((element.value * 100) / FEP).toString();
    childDiv.style.width = `${barPercentage}%`;
    childDiv.style.backgroundColor = `var(--${element.stat.split("+")[0]}1)`;
    childDiv.classList.add(`${element.stat},${element.value}`);
    parentDiv.appendChild(childDiv);

    childDiv.addEventListener("mouseover", () => {
      const infoDiv = document.querySelector(".FEPprogressInfo");
      if (infoDiv) {
        infoDiv.innerHTML = `<p style=color:var(--${element.stat.split("+")[0]}1)>${element.stat} FEP:${element.value.toFixed(
          2
        )}</p>`;
  
      }
    });

    childDiv.addEventListener("mouseout", () => {
      const infoDiv = document.querySelector(".FEPprogressInfo");
      if (infoDiv) {
        infoDiv.innerHTML = "";
      }
    });
  }
};

export const removeDivs = () => {
  const parentDiv = document.querySelector(".FEPprogress");

  if (parentDiv) {
    parentDiv.innerHTML = "";
  }
};
