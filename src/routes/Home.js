import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
    const[loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() =>{
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);
  return (
    
    <div className={styles.container}>      
      {loading? (
          <>
        <h1>Loading...</h1>
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
        </>
        
      ): 
      
      <div className={styles.movies}>{movies.map((movie) => (
        <Movie 
          key = {movie.id}
          medium_cover_image = {movie.medium_cover_image} 
          title = {movie.title} 
          summary = {movie.summary} 
          genres = {(movie.hasOwnProperty("genres")?movie.genres:null)}
          id = {movie.id}
    />
      ))}
      </div>
      }
    </div>
  );
}
export default Home;