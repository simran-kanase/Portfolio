import Card from './Card';

const CardContainer = () => {
  const cardColors = ['#3498db', '#9b59b6', '#e74c3c', '#2ecc71', '#f39c12']; // Card colors

  return (
    <div className="card-container relative w-[270px] h-[270px]">
      {cardColors.map((color, index) => (
        <Card key={index} index={index} color={color} />
      ))}
    </div>
  );
};

export default CardContainer;
