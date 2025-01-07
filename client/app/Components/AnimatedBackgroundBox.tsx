function AnimatedBackgroundBox() {
  return (
    <>
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="box w-[0.625rem] h-[0.625rem]"></div>
        ))}
    </>
  );
}

export default AnimatedBackgroundBox;
