export const createDiv = (element: any, FEP:number) => {
    const parentDiv = document.querySelector(".FEPprogress");

    if (parentDiv) {
      const childDiv = document.createElement("div");
      childDiv.style.height = `100%`;
      const barPercentage = ((element.value * 100) / FEP).toString();
      childDiv.style.width = `${barPercentage}%`;
      const cssName = element.stat.replace("+", "");
      childDiv.className = cssName;

      parentDiv.appendChild(childDiv);
    }
  };