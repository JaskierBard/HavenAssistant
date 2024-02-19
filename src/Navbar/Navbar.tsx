import React, { useState } from "react";
import "./Navbar.css";
import { FoodContainer } from "../Food/FoodContainer";
import mushrooms from "../data/mushrooms.json";
import meats from "../data/meat.json";
import { FEPprogress } from "../FEPprogress/FEPprogress";

export const NavigationBar = () => {
  const [show, setShow] = useState<string | null>(null);
  const [recievedFEP, setRecievedFEP] = useState(null);

  const getFEP = (data: any) => {
    setRecievedFEP(data);
  };

  const ChooseTypeOfFood = (food: string) => {
    if (show == null) {
      setShow(food);
    } else {
      setShow(null);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => ChooseTypeOfFood("mushrooms")}>
            Grzyby
            <img
              className="icons"
              src={"./icons/Any_Mushroom.png"}
              alt={"mushroom"}
            />
          </li>
          <li onClick={() => ChooseTypeOfFood("meats")}>
            Mięso
            <img className="icons" src={"./icons/Meat.png"} alt={"meats"} />
          </li>

          <li>Przyprawy</li>
          <li className="highlighted">Przepisy</li>

          <FEPprogress recievedFEP={recievedFEP} />
        </ul>
      </nav>
      {show === "mushrooms" ? (
        <FoodContainer type={mushrooms} getFEP={getFEP} />
      ) : null}
      {show === "meats" ? <FoodContainer type={meats} getFEP={getFEP} /> : null}
    </div>
  );
};
