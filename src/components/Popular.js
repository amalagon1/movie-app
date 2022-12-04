import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Movie from '../components/Movie';

const Popular = ({ watchlist, setwatchlist, faves, setFaves }) => {

    const key = "80375d60eb988b2592ebaca871d8e6a7";
    const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=";
    const IMG_API = "https://image.tmdb.org/t/p/w300";

    const key_API = "https://api.themoviedb.org/3/keyword/{keyword_id}/movies?api_key=<<api_key>>&language=en-US&include_adult=false"


    // const [movies, setMovies] = useState([]);
    const [movies, setMovies] = useState([]);

    const apiCall = () => {
        fetch(FEATURED_API + key)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                console.log(data.results);
                setMovies(data.results);
            })

    }

    // const nextCall = () => {
    //     fetch("https://api.themoviedb.org/3/keyword/100/movies?api_key=" + key + "&language=en-US&include_adult=false")
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data)
    //             console.log(data);
    //         })

    // }
    // nextCall()



    useEffect(() => {
        apiCall();
    }, []);

    return (
        <div className="popular">
            {/* <Header /> */}
            <h2>today's trending movies...</h2>
            <div className="trending">

                {movies.length && movies.map((movie) =>
                    <Movie
                        faves={faves}
                        setFaves={setFaves}
                        watchlist={watchlist}
                        setwatchlist={setwatchlist}
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster_path}
                        title={movie.title || movie.name}
                        date={movie.release_date}
                        media_type={movie.media_type}
                        vote_average={movie.vote_average}
                        overview={movie.overview}
                    />
                )}
                <div className="trending">

                </div>

            </div>
        </div>


    )
}

export default Popular
