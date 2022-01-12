import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const[loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    
    // const [title, setTitle] = useState("");
    const getDetails = () =>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((response) => response.json()).then((json) => 
        {setDetails(json);
        
            // console.log(json);
        setLoading(false);
        });
    };
        
        
    // console.log(details[0].data.movie.title);
    useEffect(() =>{
        getDetails();
    }, []);
    console.log(details);
    return (<div>{loading? <strong> Loading... </strong>:
    <><h1>{details.data.movie.title}</h1>
    
        <img src = {details.data.movie.medium_cover_image} alt = {details.data.movie.title}/>
        <h3>Rating</h3>
        <p>{details.data.movie.rating}</p>
        <h3>Genres</h3>
        {(details.data.movie.hasOwnProperty("genres") ? <ul>{details.data.movie.genres.map( (g) => <li key = {g}>{g}</li>)}</ul> :null)}
        <h3>Description</h3>
        <p>{details.data.movie.description_intro}</p>
        <h3>For more information, visit <Link to = {details.data.movie.url}> {details.data.movie.title}</Link> </h3>
        
        </>
    }
    
    </div>);

}

export default Detail;