
import { useTMDBContext } from "../context/TMDBContext"
import FilmAndTvCard from "../card/FilmAndTvCard";

function HomePage() {

    const { movieList, tvList, personList } = useTMDBContext();

    const movieTvList = [...movieList, ...tvList];

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
