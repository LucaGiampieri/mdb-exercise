
import { useTMDBContext } from "../context/TMDBContext"
import FilmAndTvCard from "../card/FilmAndTvCard";

function HomePage() {

    const { movieList, tvList, personList } = useTMDBContext();

    const movieTvList = [
        ...movieList.map(m => ({ ...m, media_type: "movie" })),
        ...tvList.map(tv => ({ ...tv, media_type: "tv" }))
    ];

    return (
        <main>
            <div className="card-container">
                {movieTvList.map(movie => {
                    if (!movie.poster_path) return null;
                    return (
                        <FilmAndTvCard
                            key={movie.id}
                            movie={movie}
                        />
                    );
                })}
            </div>
        </main>
    )
}

export default HomePage
