import { FEPlimitChecker } from "../functions/FEPlimitChecker";
import { createDiv, removeDivs } from "../functions/createDiv";
import "./FEPprogress.css";
import { useEffect, useState } from "react";

export const FEPprogress = (props: any) => {
  const [FEP, setFEP] = useState<number>(10);
  const [FEPtotal, setFEPtotal] = useState<{ stat: string; value: number }[]>(
    []
  );
  useEffect(() => {
    const processFEP = async () => {
      const updatedFEPtotal = [...FEPtotal];

      await Promise.all(
        (props.recievedFEP || []).map(async (element: any) => {
          const existingStatIndex = updatedFEPtotal.findIndex(
            (stat) => stat.stat === element.stat
          );

          if (existingStatIndex !== -1) {
            updatedFEPtotal[existingStatIndex].value += element.value;
          } else {
            updatedFEPtotal.push(element);
          }
        })
      );
      setFEPtotal(updatedFEPtotal);
    };

    processFEP();
  }, [props.recievedFEP]);

  useEffect(() => {
    removeDivs();
    let sum = 0;
    FEPtotal?.forEach((element: any) => {
      sum += element.value;

      createDiv(element, FEP);
    });
    FEPlimitChecker(sum, FEP)

    console.log(FEPtotal);
  }, [FEPtotal]);

  const clearFEP = () => {
    setFEPtotal([]);
    removeDivs();
  };

  const handleInputChange = (e: any) => {
    setFEP(Number(e.target.value));
  };

  return (
    <div className="FEPcontainer">
      <div className="FEPprogress"> </div>
      <div className="FEPprogressInfo"></div>

      <input
        className="FEPinput"
        type="text"
        id="yourInput"
        placeholder="FEP"
        value={FEP}
        onChange={handleInputChange}
      />
      <button onClick={clearFEP}>Wyzeruj pasek</button>
    </div>
  );
};
