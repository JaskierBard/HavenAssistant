export const FEPlimitChecker = (totalFEP: number, FEP: number): void => {
  if (totalFEP >= FEP) {
    console.log("Nowy poziom!");
  } else {
    console.log("FEP do nowego poziomu: " + (FEP - totalFEP).toFixed(2));
  }
};
