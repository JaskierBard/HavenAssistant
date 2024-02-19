import React, { useState } from "react";
import "./Navbar.css";
import { FoodContainer } from "../Food/FoodContainer";
import mushrooms from "../data/mushrooms.json";
import meats from "../data/meat.json";
import baked_goods from "../data/baked_goods.json";
import unbaked_goods from "../data/unbaked_goods.json";

import { FEPprogress } from "../FEPprogress/FEPprogress";
import { FoodBonusesChoice } from "../Food/FoodBonusesChoice";

export const NavigationBar = () => {
  const [show, setShow] = useState<string | null>(null);
  const [recievedFEP, setRecievedFEP] = useState(null);
  const [filter, setFilter] = useState(null);

  const getFilter = (data: any) => {
    setFilter(data);
    // console.log(data);
  };

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
          <li onClick={() => ChooseTypeOfFood("meals")} className="highlighted">
            Posiłki
            <img className="icons" src={"./icons/Meat.png"} alt={"meats"} />
          </li>
          <li onClick={() => ChooseTypeOfFood("filter")}>
            Filtruj
            <img className="icons" src="./images/filter.png" />
          </li>

          <FEPprogress recievedFEP={recievedFEP} />
        </ul>
      </nav>
      {show === "mushrooms" ? (
        <FoodContainer type={mushrooms} getFEP={getFEP} />
      ) : null}
      {show === "meats" ? <FoodContainer type={meats} getFEP={getFEP} /> : null}
      {show === "filter" ? <FoodBonusesChoice getFilter={getFilter} /> : null}

      {show === "meals" ? (
        <FoodContainer type={baked_goods} getFEP={getFEP} />
      ) : null}
    </div>
  );
};
