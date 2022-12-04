import React, { useState } from 'react';
import Header from "./Header";
import Movie from '../components/Movie';
import Popular from '../components/Popular';
import '../styles/recommended.css';


const searchApi = "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false"
const key = "80375d60eb988b2592ebaca871d8e6a7";

const Recommended = ({ watchlist, setwatchlist, faves, setFaves }) => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);

                } else {
                    setResults([]);
                }

                console.log(search)
                console.log(data)
                // const randomTitle = data.results[Math.floor(Math.random() * data.results.length)]
                // console.log(randomTitle)
                // setResults(randomTitle)

                // getRandom(data)

            });

    }





    // console.log(search);
    // console.log(results)

    return (
        <div className="searchResult">
            {/* <Header /> */}
            <h1>Search for a movie</h1>

            <input type="text"
                value={search}
                onChange={handleSearchChange}
            />
            {/* <button type="submit" className="searchBtn" onClick={getResults}>Submit</button> */}
            {results.length > 0 && (
                <ul className="results">
                    {results.map(movie => (
                        // <li key={m.id}>
                        //     {m.title}
                        // </li>
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
                        />
                    ))}
                </ul>

            )}
            {/* <Popular />
            <h1> My Watch-List</h1> */}


        </div>




    );
}

export default Recommended

