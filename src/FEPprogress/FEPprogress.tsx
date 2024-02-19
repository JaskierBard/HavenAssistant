import { createDiv } from "../functions/createDiv";
import "./FEPprogress.css";
import { useEffect, useState } from "react";


export const FEPprogress = (props: any) => {
  const [FEP, setFEP] = useState<number>(10);

  useEffect(() => {
    if (props.recievedFEP) {
      props.recievedFEP.forEach((element: any) => {
        // console.log(element.value);
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
