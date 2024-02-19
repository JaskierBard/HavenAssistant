import React, { useEffect, useState } from "react";
import "./Food.css";
import { checkStatsLevel } from "../functions/quality";

interface FoodItem {
  name: string;
  tips?: string;
  energy?: number;
  hunger?: number;
  energyHunger?: number;
  foodEventPoints?: any;
  HungerperFEP?: number;
  FEPperHunger?: number;
  png: string;
}
export const FoodContainer = (props: any) => {
  const [foodDetails, setFoodDetails] = useState<FoodItem | null>(null);
  const [quality, setQuality] = useState<number>(10);
  const [totalFEP, setTotalFEP] = useState<any>(0);

  useEffect(() => {
    const sumFEP = () => {
      let sum = 0;
      let data: any = [];
      Object.entries(foodDetails?.foodEventPoints || {}).forEach(
        ([stat, value]) => {
          sum += checkStatsLevel(value as any, quality);
          data.push({ stat: stat, value: value });
        }
      );
      props.getFEP(data);
      setTotalFEP(sum);
    };

    sumFEP();
  }, [quality, foodDetails]);

  const handleInputChange = (e: any) => {
    setQuality(e.target.value);
  };

  const handleFoodClick = (food: any) => {
    setFoodDetails(food === foodDetails ? null : food);
  };
  return (
    <div className="food-section">
      <div className="food-list">
        {props.type.map((mushroom: any, index: any) => (
          <div
            className="food-item"
            key={index}
            onClick={() => handleFoodClick(mushroom)}
          >
            <p className="food-name">{mushroom.name}</p>
            <img
              className="food-icon"
              src={`./icons/${mushroom.png}`}
              alt={mushroom.name}
            />
          </div>
        ))}
      </div>

      {foodDetails && (
        <div className="details">
          <table className="food-table">
            <tbody>
              <tr>
                <th>Quality</th>
                <td>
                  <input
                    type="text"
                    id="yourInput"
                    value={quality}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Energy</th>
                <td>{foodDetails.energy}</td>
              </tr>
              <tr>
                <th>Hunger</th>
                <td>{foodDetails.hunger}</td>
              </tr>
              {Object.entries(foodDetails?.foodEventPoints || {}).map(
                ([stat, value], index) => (
                  <tr key={index}>
                    <th>{stat}</th>
                    <td>{checkStatsLevel(value as any, quality)}</td>
                  </tr>
                )
              )}

              <tr>
                <th>Total FEP</th>
                <td>{totalFEP}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
