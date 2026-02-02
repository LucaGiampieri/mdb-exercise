
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

    const movieTvList = [...movieList, ...tvList]

    return (
        <main>

            <div className="card-container">
                {movieTvList.map(movie => {
                    return (
                        <div
                            className="card"
                            key={movie.id}>
                            <div className="card-front">
                                <img
                                    className="card-background"
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className="card-back">
                                titolo = {movie.title} <br />
                                titolo originale = {movie.original_title} <br />
                                lingua =
                                <img
                                    className="card-lenguage-flag"
                                    src={flags[movie.original_language] || defaultFlag}
                                    alt={movie.original_language}
                                /> <br />
                                {Math.ceil(movie.vote_average / 2) === 0 && (
                                    <>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 1 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 2 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 3 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 4 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </>
                                )}
                                {Math.ceil(movie.vote_average / 2) === 5 && (
                                    <>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </>
                                )}

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure, perferendis eaque accusantium dicta aspernatur vitae quidem assumenda ex unde facere, velit ab odit eum animi at modi corrupti! Eligendi!
                                    Hic repellendus recusandae vitae officia amet deleniti debitis suscipit vel ut harum saepe minima molestias illum, quaerat non consequuntur id? Autem aliquam molestiae excepturi animi tenetur earum adipisci quibusdam dolor.
                                    Ipsum corporis cupiditate explicabo in, impedit nesciunt atque quasi doloremque eius iusto aliquam consectetur dolor mollitia possimus, quidem neque repellendus eligendi laborum vitae enim non voluptate harum placeat! Eligendi, dolor.
                                    Commodi sunt eaque debitis molestiae voluptas inventore est perspiciatis provident cum unde placeat nesciunt eos sit earum deleniti excepturi obcaecati ipsum fugiat voluptatem vitae reprehenderit, sapiente sed dignissimos distinctio! Iure.
                                    Quo suscipit minima, voluptatum ullam odit consequatur impedit! Ex numquam deserunt sint tempora eum autem nam, neque animi repellat repellendus perferendis. Ipsa harum accusantium repellendus! Molestiae aperiam dolorum dolorem voluptatum.
                                    Nesciunt libero, velit omnis illo voluptates ipsum minima aperiam cum. Natus deleniti nisi culpa animi nihil voluptate quasi beatae enim, voluptatem dolores dolor vero aspernatur officiis velit repellat quia! Tempora.
                                    Eveniet voluptas corporis id, perspiciatis totam quisquam consectetur! Sapiente corporis qui tempora quae pariatur ea recusandae cupiditate dolore? Facere, ipsum. In laudantium illo quisquam rerum sunt ut placeat totam doloremque.
                                    Enim pariatur sit earum! Nostrum possimus, maxime harum vero, deleniti eius voluptates incidunt neque quos sed ex enim, ipsam a? Iste dicta vero quis quas optio, assumenda nisi quam laboriosam?
                                    Nulla iste vitae facere recusandae. Dolores placeat quas minima earum eius. Eum est error quibusdam nulla, nesciunt iure expedita consectetur ipsa asperiores repudiandae officiis et, hic explicabo? Unde, earum alias.
                                    Voluptate voluptas corporis, doloremque reiciendis neque non minus illum facilis sunt quidem odit reprehenderit, pariatur, repudiandae natus cum culpa! Distinctio voluptatem eveniet ratione excepturi qui ut. Tenetur ducimus maxime ipsam?
                                    Blanditiis saepe praesentium commodi, doloribus ex, reprehenderit odio necessitatibus nemo magni, corporis obcaecati eveniet architecto voluptatem est numquam! Consequuntur aliquam velit, obcaecati totam maxime eius dolore. Unde libero ex eum.
                                    Esse nostrum possimus obcaecati, a et architecto ex repellat optio libero consequatur placeat nulla ratione ab vel aliquid similique odio laboriosam expedita quos labore recusandae pariatur. Deleniti est atque aliquid!
                                    Ut consectetur incidunt, et voluptates saepe ratione esse facere illo maiores veritatis consequuntur quibusdam sapiente rem. Vel nam maxime, facilis alias obcaecati molestiae doloribus dolorem tempora corporis modi temporibus est.
                                    Quibusdam, sint excepturi et sequi enim sit consequatur aut, unde distinctio cum doloremque, minus nam. Ut molestias sequi voluptatem, voluptatum possimus corporis unde? Eos ipsa temporibus quas repellendus, magni dolore.
                                    Cumque, soluta adipisci? Atque laborum voluptatibus voluptatum enim consequatur, hic inventore ea facere nemo, iure accusantium laboriosam labore quis? Perferendis reprehenderit alias, tempora non eaque minus deleniti nobis quaerat ad?
                                    Quisquam iste voluptas asperiores eos, in repudiandae labore ut facere quod. Provident temporibus nisi quas corporis, distinctio quibusdam labore iste harum aliquid similique explicabo rem quasi numquam mollitia. Blanditiis, eaque.
                                    Veritatis at unde aliquid, eius distinctio praesentium eaque quidem dolore assumenda veniam explicabo cumque quis beatae non! Deserunt, fugit, quam tenetur quasi est, similique nulla praesentium dolorem eius quo veritatis.
                                    Aliquam est nesciunt optio at aspernatur blanditiis facere delectus incidunt modi tempora. Consequatur modi ipsum, repudiandae cupiditate amet recusandae? Suscipit quidem reprehenderit consectetur tempora maiores mollitia tenetur harum delectus dolorum?
                                    Aliquid dicta reiciendis eius esse reprehenderit distinctio cumque nostrum, pariatur debitis quia aperiam, soluta deleniti ipsa totam similique recusandae inventore! Dolores quos veritatis voluptates nesciunt cupiditate deleniti quam fugiat hic.
                                    Dolorum earum aut unde numquam ad veniam, reprehenderit at maxime qui reiciendis consectetur voluptatibus ab quibusdam rem autem sit ipsa ipsum neque quia, distinctio illo dolor eveniet minus nihil! Quibusdam.
                                    Asperiores nesciunt, accusantium reprehenderit natus debitis aut corporis voluptates deserunt. Deleniti, ipsa libero temporibus animi mollitia quae. Quaerat molestiae reprehenderit at esse vel amet, ad saepe magnam doloribus nulla voluptatum.
                                    Sint asperiores aliquam, nemo dicta quibusdam consequatur aut? Numquam repudiandae aliquam exercitationem dolor ratione minima, est delectus quas unde! Architecto, dolorem magni eveniet debitis eum iusto numquam ex deleniti odit?
                                    Ut aut aliquam voluptatum amet repellat laboriosam reprehenderit velit molestias, est unde magnam adipisci modi vero rem. Dignissimos quaerat, harum aspernatur similique voluptatibus explicabo, unde, incidunt esse laborum ipsa accusantium!
                                    Earum placeat maiores aspernatur blanditiis aliquid beatae non totam doloribus dolores, recusandae magnam vero fugiat ea vel eveniet libero at ipsum doloremque laboriosam voluptatem itaque! Dolorum praesentium nemo fugit nihil.
                                    Eum, maxime eaque. Ea dolore velit, eligendi provident reiciendis excepturi totam, suscipit minima eum temporibus a harum atque odit error libero. Placeat corrupti sed inventore voluptate illo, dicta obcaecati eligendi!
                                    Fuga error in blanditiis laudantium cum incidunt sequi fugiat nisi laborum at mollitia est enim repellat nam aperiam natus, non vitae totam eveniet nesciunt dolore tempora id doloremque. Illum, obcaecati.
                                    Non odio iusto sunt illum id. Expedita consequatur laborum eius! Pariatur, dolor dolorem eius ex consectetur impedit officia harum consequuntur deleniti sapiente aperiam temporibus neque odio vero? Voluptates, blanditiis non.
                                    Exercitationem voluptatem doloribus sequi ea, sint inventore et provident aut, illum omnis quod unde a obcaecati! Officia dolore, odit ab voluptate fuga quaerat laudantium veniam similique, explicabo labore et aliquid.
                                    Quam minus sapiente ab amet optio nisi aliquam voluptatum quae quo pariatur minima a quia autem quod dicta nemo molestiae, sunt totam laboriosam veniam. Modi aliquam voluptatem exercitationem expedita laborum.
                                    Tenetur, hic ea enim nesciunt nemo, totam dolores minima voluptas placeat sit culpa nobis aspernatur, quam quas unde eum laudantium quo sunt necessitatibus eligendi. Facilis officiis hic aperiam impedit corrupti?</p>
                            </div>

                        </div>
                    );
                })}


            </div>
        </main>
    )
}

export default HomePage
