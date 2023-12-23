import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const thirtyDaysAgo = new Date(
  currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
);

const popularGamesResponse = await axios.get("https://api.rawg.io/api/games", {
  params: {
    added: `${currentYear}-01-01,${currentYear}-12-31`,
    ordering: "-rating",
    key: apiKey,
  },
});

const newGamesResponse = await axios.get("https://api.rawg.io/api/games", {
  params: {
    dates: `${thirtyDaysAgo.toISOString().split("T")[0]},${
      currentDate.toISOString().split("T")[0]
    }`,
    ordering: "-released",
    key: apiKey,
  },
});

const bestOfTheYear = await axios.get("https://api.rawg.io/api/games", {
  params: {
    dates: `${currentYear}-01-01,${currentYear}-12-31`,
    ordering: "-rating",
    key: apiKey,
  },
});

export { popularGamesResponse, newGamesResponse, bestOfTheYear };
