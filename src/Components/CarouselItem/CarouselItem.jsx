export default function CarouselItem({ game }) {
  return (
    <div className="carousel-item">
      <div className="lg:tooltip" data-tip={game.name}>
        <img
          src={game.short_screenshots[1].image}
          className="w-[150px] h-[220px] hover:scale-110 cursor-pointer transition duration-150 ease-in-out"
        />
      </div>
    </div>
  );
}
