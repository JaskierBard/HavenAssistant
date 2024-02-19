import React, { useEffect, useState } from "react";
import "./Food.css";
import { stats } from "../data/stats.js";

export const FoodBonusesChoice = (props: any) => {
  const [filter, setFilter] = useState<string[]>([]);

  const midIndex = Math.ceil(stats.length / 2);
  const firstColumn = stats.slice(0, midIndex);
  const secondColumn = stats.slice(midIndex);

  useEffect(() => {
    props.getFilter(filter);
  }, [filter]);

  const handleChoice = (stat: string) => {
    if (filter.includes(stat)) {
      setFilter((prevFilter) => prevFilter.filter((str) => str !== stat));
    } else {
      setFilter((prevFilter) => prevFilter.concat(stat));
    }
  };

  return (
    <div className="bonuses-section">
      <div className="row">
        {/* First Column */}
        <div>
          {firstColumn.map((stat, index) => (
            <button
              onClick={() => handleChoice(stat)}
              style={{
                backgroundColor: filter.includes(stat)
                  ? "grey"
                  : `var(--${stat.split("+")[0]}1)`,
              }}
              className="food-bonus-button"
              key={index}
            >
              {stat}
            </button>
          ))}
        </div>

        {/* Second Column */}
        <div>
          {secondColumn.map((stat, index) => (
            <button
              onClick={() => handleChoice(stat)}
              style={{
                backgroundColor: filter.includes(stat)
                  ? "grey"
                  : `var(--${stat.split("+")[0]}2)`,
              }}
              className="food-bonus-button"
              key={index}
            >
              {stat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
