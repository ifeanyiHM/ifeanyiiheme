import { useEffect, useState } from "react";

interface StarProps {
  x: number;
  y: number;
  size: number;
  duration: number;
}

const StarBackground = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const count = screenWidth <= 640 ? 80 : 150;
    const newStars: StarProps[] = [];

    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 4;
      const duration = Math.random() * 2;

      newStars.push({ x, y, size, duration });
    }

    setStars(newStars);
  }, []);

  return (
    <section className="relative overflow-hidden w-screen h-screen">
      {stars.map((star, index) => (
        <Star
          key={index}
          x={star.x}
          y={star.y}
          size={star.size}
          duration={star.duration}
        />
      ))}
    </section>
  );
};

const Star = ({ x, y, size, duration }: StarProps) => {
  const starStyle: React.CSSProperties = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${size - 2}px`,
    height: `${size - 2}px`,
    backgroundColor: "#fff",
    borderRadius: "50%",
    opacity: 0.8,
    animation: `twinkle ${2 + duration}s linear infinite`,
    animationDelay: `${2 + duration}s`,
  };

  return <div style={starStyle} />;
};

export default StarBackground;
