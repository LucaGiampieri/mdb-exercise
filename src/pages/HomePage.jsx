
import { useTMDBContext } from "../context/TMDBContext"
import FilmAndTvCard from "../card/FilmAndTvCard";

function HomePage() {

    const { movieList, tvList, latestMovies, latestTv, inputValue } = useTMDBContext();

    const isSearching = inputValue.trim().length > 0;
    const noResults = isSearching && movieList.length === 0 && tvList.length === 0;


    return (
        <main>

            {/* 🔍 Nessun risultato */}
            {noResults && (
                <h2 className="section-title">Nessun risultato trovato</h2>
            )}

            {/* 👉 Latest se NON cerca */}
            {!isSearching && (
                <>
                    <h2 className="section-title">Film:</h2>
                    <div className="card-container">
                        {latestMovies.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard key={movie.id} movie={movie} />
                            );
                        })}
                    </div>

                    <h2 className="section-title">Serie tv:</h2>
                    <div className="card-container">
                        {latestTv.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard key={movie.id} movie={movie} />
                            );
                        })}
                    </div>
                </>
            )}

            {/* 👉 Risultati ricerca */}
            {isSearching && !noResults && (
                <>
                    <h2 className="section-title">Film:</h2>
                    <div className="card-container">
                        {movieList.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard key={movie.id} movie={movie} />
                            );
                        })}
                    </div>

                    <h2 className="section-title">Serie tv:</h2>
                    <div className="card-container">
                        {tvList.map(movie => {
                            if (!movie.poster_path) return null;
                            return (
                                <FilmAndTvCard key={movie.id} movie={movie} />
                            );
                        })}
                    </div>
                </>
            )}

        </main>

    )
}

export default HomePage
