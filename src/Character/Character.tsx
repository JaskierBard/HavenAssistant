import React from "react";
import "./Character.css"; // Załóżmy, że plik CSS nazwano StatsTable.css

export const Character = () => {
  const stats = {
    Strength: 86,
    Agility: 65,
    Intelligence: 126,
    Constitution: 65,
    Perception: 141,
    Charisma: 68,
    Dexterity: 63,
    Will: 36,
    Psyche: 21,
  };

  const FEP = (statistics: { [key: string]: number }): number => {
    const values = Object.values(statistics);
    return Math.max(...values);
  };

  return (
    <div className="hero">
      <img className="photo" src={`./images/avatar.png`} alt={"JaskierYoung"} />
      <h3 className="heroName">JaskierYoung</h3>
      <p className="fep">FEP {FEP(stats)}</p>

      {/* <table className="stats-table">
        <tbody>
          {Object.entries(stats).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

