
import { useTMDBContext } from "../context/TMDBContext"

function HomePage() {

    const { movieList, tvList } = useTMDBContext();

    const flags = {
        en: "https://flagcdn.com/us.svg",
        it: "https://flagcdn.com/it.svg",
        fr: "https://flagcdn.com/fr.svg",
        es: "https://flagcdn.com/es.svg",
        de: "https://flagcdn.com/de.svg",
        ja: "https://flagcdn.com/jp.svg",
        zh: "https://flagcdn.com/cn.svg",
        ko: "https://flagcdn.com/kr.svg"
    };

    const defaultFlag = "https://flagcdn.com/un.svg";

    return (
        <main>
            <h2>Film</h2>
            <ul>
                {movieList.map(movie => {
                    return (
                        <li key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            titolo = {movie.title} <br />
                            titolo originale = {movie.original_title} <br />
                            lingua =
                            <img
                                className="lenguage-flag"
                                src={flags[movie.original_language] || defaultFlag}
                                alt={movie.original_language}
                            /> <br />
                            {Math.ceil(movie.vote_average / 2) === 0 && (
                                <>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(movie.vote_average / 2) === 1 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(movie.vote_average / 2) === 2 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(movie.vote_average / 2) === 3 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(movie.vote_average / 2) === 4 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(movie.vote_average / 2) === 5 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </>
                            )}

                        </li>
                    );
                })}
            </ul>
            <h2>Tv</h2>
            <ul>
                {tvList.map(tv => {
                    return (
                        <li key={tv.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
                            titolo = {tv.name} <br />
                            titolo originale = {tv.original_name} <br />
                            lingua =
                            <img
                                className="lenguage-flag"
                                src={flags[tv.original_language] || defaultFlag}
                                alt={tv.original_language}
                            /> <br />
                            {Math.ceil(tv.vote_average / 2) === 0 && (
                                <>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(tv.vote_average / 2) === 1 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(tv.vote_average / 2) === 2 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(tv.vote_average / 2) === 3 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(tv.vote_average / 2) === 4 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </>
                            )}
                            {Math.ceil(tv.vote_average / 2) === 5 && (
                                <>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </>
                            )}

                        </li>
                    );
                })}
            </ul>
        </main>
    )
}

export default HomePage
