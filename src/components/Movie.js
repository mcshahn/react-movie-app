import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({medium_cover_image, title, summary, genres, id}){
    return (
    <div className={styles.movie}>
    <img src = {medium_cover_image} alt = {title} className={styles.movie__img}/>
    <div >
    <h2 className={styles.movie__title}><Link to = {`/movie/${id}`}> {title}</Link></h2>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    {(genres != null) ?<ul  className={styles.movie__genres}>
    {genres.map((g) => (<li key = {g}> {g} </li>))}
    </ul>:null}
    </div>
    </div>); 
    }
Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number.isRequired
}
export default Movie;