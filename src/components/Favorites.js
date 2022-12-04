import React from 'react'
import Movie from './Movie'
import Header from './Header'

const Favorites = ({ faves, setFaves, watchlist, setwatchlist }) => {
    return (
        <div className="favorites">
            {/* <Header /> */}
            <h1>My Favorites</h1>
            <div className="results">
                {faves.map(movie => (

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

        </div>
    )
}

export default Favorites
