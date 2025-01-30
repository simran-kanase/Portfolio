import { useCardContext } from './CardContext';

const Card = ({ index, color }) => {
  const { currentCardIndex, totalCards } = useCardContext();

  // Determine visibility and rotation
  const isVisible = index >= currentCardIndex;
  const rotationAngle = -10 * index; // Decrease rotation by 10° per card

  // Animation styles
  const translateY = isVisible ? "0px" : "-150px"; // Move up when not visible
  const opacity = isVisible ? 1 : 0; // Fade out when not visible
  const zIndex = totalCards - index; // Stack cards in reverse order

  // Dynamic content for each card
  const cardInfo = [
    { title: "Web Developer", desc: "React | Tailwind | JavaScript" },
    { title: "Projects", desc: "Portfolio | E-Commerce | Expense Tracker" },
    { title: "Contact", desc: "kanasesimran8@gmail.com" },
    { title: "Hobbies", desc: "Coding | Tea | Music" },
    { title: "Open to Work", desc: "Looking for Freelance Projects!" },
  ];

  return (
    <div
      className={`card absolute top-0 w-full h-full flex flex-col items-center justify-center text-xl font-semibold text-white rounded-lg shadow-lg transition-all duration-700 ease-in-out`}
      style={{
        backgroundColor: color,
        transform: `translateY(${translateY}) rotate(${rotationAngle}deg)`,
        zIndex,
        opacity,
      }}
    >
      <h2 className="mb-2 text-2xl font-bold">{cardInfo[index].title}</h2>
      <p className="text-center">{cardInfo[index].desc}</p>
    </div>
  );
};

export default Card;
