
import { useTMDBContext } from "../context/TMDBContext"
import FilmAndTvCard from "../card/FilmAndTvCard";

function HomePage() {

    const { movieList, tvList, latestMovies, latestTv, inputValue } = useTMDBContext();

    return (
        <main>

            {!inputValue.trim() && (
                <>
                    <h2 className="section-title">Ultime uscite popolari film:</h2>
                    <div className="card-container">
                        {latestMovies.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            );
                        })}
                    </div>

                    <h2 className="section-title">Ultime uscite popolari serie tv:</h2>
                    <div className="card-container">
                        {latestTv.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            );
                        })}
                    </div>
                </>
            )}


            {inputValue.trim() && (
                <>
                    <h2 className="section-title">Film:</h2>
                    <div className="card-container">
                        {movieList.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            );
                        })}
                    </div>

                    <h2 className="section-title">Serie tv:</h2>
                    <div className="card-container">
                        {tvList.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            );
                        })}
                    </div>
                </>
            )}

        </main>
    )
}

export default HomePage
