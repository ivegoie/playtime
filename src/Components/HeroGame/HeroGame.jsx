export default function HeroGame({ gamesData }) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomGame = gamesData[randomNumber];
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: randomGame && `url(${randomGame.background_image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content uppercase text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ">{randomGame?.name}</h1>
          <button className="btn btn-block">Watch Trailer Now</button>
        </div>
      </div>
    </div>
  );
}
