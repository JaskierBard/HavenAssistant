export const createDiv = (element: any, FEP:number) => {
    const parentDiv = document.querySelector(".FEPprogress");

    if (parentDiv) {
      const childDiv = document.createElement("div");
      childDiv.style.height = `100%`;
      const barPercentage = ((element.value * 100) / FEP).toString();
      console.log(`var(--${element.stat.split("+")[0]}1)`)
      childDiv.style.width = `${barPercentage}%`;
      childDiv.style.backgroundColor = `var(--${element.stat.split("+")[0]}1)`;
      parentDiv.appendChild(childDiv);
    }
  };