import CarouselItem from "../CarouselItem/CarouselItem";

export default function Carousel({ title = "Popular Games", games }) {
  return (
    <>
      <h1 className="text-2xl font-bold pt-6 pb-2 pl-2">{title}</h1>
      <div className="carousel carousel-center space-x-4">
        {games?.map((game) => (
          <CarouselItem key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
