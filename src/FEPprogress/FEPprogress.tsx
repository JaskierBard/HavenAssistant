import { createDiv } from "../functions/createDiv";
import "./FEPprogress.css";
import { useEffect, useState } from "react";

// const barProgress = {
//   strength1: 0,
//   agility1: 0,
//   intelligence1: 0,
//   constitution1: 0,
//   perception1: 0,
//   charisma1: 0,
//   dexterity1: 0,
//   will1: 0,
//   psyche1: 0,
//   strength2: 0,
//   agility2: 0,
//   intelligence2: 0,
//   constitution2: 0,
//   perception2: 0,
//   charisma2: 0,
//   dexterity2: 0,
//   will2: 0,
//   psyche2: 0,
// };

export const FEPprogress = (props: any) => {
  const [FEP, setFEP] = useState<number>(10);

  useEffect(() => {
    // console.log(props.recievedFEP);

    if (props.recievedFEP) {
      props.recievedFEP.forEach((element: any) => {
        console.log(element.value);
        createDiv(element, FEP);
      });
    }
  }, [props.recievedFEP]);

  useEffect(() => {
    const myDivs = document.getElementsByClassName("FEPprogress");
    Array.from(myDivs).forEach((myDiv) => {
      while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
      }
    });
    if (props.recievedFEP) {
      props.recievedFEP.forEach((element: any) => {
        console.log(element.value);
        createDiv(element, FEP);
      });
    }
  }, [FEP]);



  const handleInputChange = (e: any) => {
    setFEP(Number(e.target.value));
  };

  return (
    <div>
      <div className="FEPprogress"> </div>

      <input
        type="text"
        id="yourInput"
        placeholder="FEP"
        value={FEP}
        onChange={handleInputChange}
      />
    </div>
  );
};
