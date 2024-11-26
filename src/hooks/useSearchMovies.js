import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useSearchMovies = () => {
    const dispatch = useDispatch();
    
    const getSearchMovie = async() => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=Hera%20Pheri&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        console.log(json.results);
    }
}