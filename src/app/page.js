import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchMoviesList(params) {
  const genre = params.genre || "featchTrinding";
  await delay(3000);
  const rsp = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await rsp.json();
  if (!rsp.ok) {
    throw new Error("Fail to load data");
  }
  return data.results;
}
export default async function Home({ searchParams }) {
  const moveslist = await fetchMoviesList(searchParams);
  return (
    <div>
      <Results results={moveslist} />
    </div>
  );
}
