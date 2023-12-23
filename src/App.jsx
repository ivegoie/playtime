import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import HeroGame from "./Components/HeroGame/HeroGame";

import { popularGamesResponse, newGamesResponse, bestOfTheYear } from "./api";

function App() {
  const [gamesData, setGamesData] = useState({
    isLoading: true,
    popularGames: [],
    newGames: [],
    bestOfTheYear: [],
  });

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setGamesData({
          popularGames: popularGamesResponse.data.results,
          newGames: newGamesResponse.data.results,
          bestOfTheYear: bestOfTheYear.data.results,
        });

        gamesData.isLoading = false;
      } catch (error) {
        console.log(error);
        gamesData.isLoading = false;
      }
    };
    fetchGames();
  }, []);

  return (
    <main>
      <Navbar />
      <HeroGame gamesData={gamesData.popularGames} />
      {gamesData.isLoading ? (
        <div className="skeleton h-32 w-full"></div>
      ) : (
        <div className="m-3">
          <Carousel
            title={"All Time Games"}
            isLoading={gamesData.isLoading}
            games={gamesData.popularGames}
          />
          <Carousel
            title={"Best of the Year"}
            isLoading={gamesData.isLoading}
            games={gamesData.bestOfTheYear}
          />
          <Carousel
            title={"New Games"}
            isLoading={gamesData.isLoading}
            games={gamesData.newGames}
          />
        </div>
      )}
    </main>
  );
}

export default App;
