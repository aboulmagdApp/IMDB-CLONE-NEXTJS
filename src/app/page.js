import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

async function fetchMoviesList(params) {
  const genre = params.genre || "featchTrinding";
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
  console.log(moveslist);
  return (
    <div>
      <Results results={moveslist} />
    </div>
  );
}
