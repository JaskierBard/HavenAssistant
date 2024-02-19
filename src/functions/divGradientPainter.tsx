export const divGradientPainter = (mushroom:any) => {
    const foodEventPoints = mushroom?.foodEventPoints || {};
    const stats = Object.keys(foodEventPoints);
  
    if (stats.length === 0) {
      return { background: "black" }; // Domyślny kolor, gdy brak statystyk
    } else if (stats.length === 1) {
      // Jeśli jest tylko jedna statystyka, użyj jej koloru
      const singleStatColor = `var(--${stats[0].split("+")[0]}1)`;
      return { background: singleStatColor };
    } else {
      // Jeśli jest więcej niż jedna statystyka, stwórz gradient
      const gradientColors = stats.map(
        (stat) => `var(--${stat.split("+")[0]}1)`
      ).join(", ");
      return { background: `linear-gradient(to right, ${gradientColors})` };
      
    }
  };
  
