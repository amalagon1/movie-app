import React, { useEffect } from 'react';
import Movie from '../components/Movie';

const WatchList = ({ watchlist, setwatchlist, faves, setFaves }) => {
    //local storage//

    return (
        <div>
            <h1> Watch-List</h1>
            {watchlist.length && (
                <div className="results">
                    {watchlist.map(movie => (

                        // <li key={m.id}>
                        //     {m.title}
                        // </li>
                        < Movie
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
                </div>

            )}
        </div>
    )
}

export default WatchList
