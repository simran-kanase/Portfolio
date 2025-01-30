import  { createContext, useContext, useState, useEffect } from "react";

// Create Card Context
const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const totalCards = 5; // Total number of cards
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState("forward"); // Track direction: 'forward' or 'reverse'

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (direction === "forward") {
        if (currentCardIndex < totalCards - 1) {
          setCurrentCardIndex((prev) => prev + 1); // Animate forward
        } else {
          setDirection("reverse"); // Switch to reverse
        }
      } else if (direction === "reverse") {
        if (currentCardIndex > 0) {
          setCurrentCardIndex((prev) => prev - 1); // Animate reverse
        } else {
          setDirection("forward"); // Switch to forward
        }
      }
    }, 1000); // Delay between card animations

    return () => clearInterval(animationInterval); // Cleanup interval
  }, [currentCardIndex, direction]);

  return (
    <CardContext.Provider value={{ currentCardIndex, totalCards }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
