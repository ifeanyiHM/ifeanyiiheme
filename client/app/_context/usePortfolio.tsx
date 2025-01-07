import { useContext } from "react";
import { PortContext } from "./PortfolioContext";

function usePortfolio() {
  const context = useContext(PortContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

export default usePortfolio;
