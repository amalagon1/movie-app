import { React, useState } from 'react';
import Popular from '../components/Popular';


const IMG_API = "https://image.tmdb.org/t/p/w300";



const Movie = ({

    faves,
    setFaves,
    watchlist,
    setwatchlist,
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    overview
}) => {




    const isInWatchlist = watchlist.find(movie => movie.id === id);
    const isInFaves = faves.find(movie => movie.id === id);
    // const isInFaves = console.log('hello');



    // const favesIncluded = faves.includes(movie => movie.id);
    // const watchListIncluded = watchlist.includes(movie => movie.id)




    return (
        <div className='card'>
            <img src={IMG_API + poster} alt={title} />
            {/* <p>{title}</p> */}
            <div className="saveContent">
                <p>{overview}</p>
                <div className='faves-wrapper'>

                    <p>{isInFaves ? "Remove from" : "Add to"} favorites</p>
                    <button onClick={() => {
                        if (isInFaves) {
                            console.log('im in faves!')
                            const newFaves = faves.filter(movie => movie.id !== id);
                            setFaves(newFaves)
                        } else {
                            setFaves([{ id, poster_path: poster, title, date, media_type, vote_average }, ...faves])
                            console.log('hello')
                        }


                    }}>{isInFaves ? " - " : "+"}</button>
                </div>

                <div className='watchlist-wrapper'>
                    <p>{isInWatchlist ? "Remove from" : "Add to"} watch-list</p>
                    <button onClick={() => {

                        if (isInWatchlist) {
                            const newWatchList = watchlist.filter(movie => movie.id !== id);

                            setwatchlist(newWatchList)
                        } else {


                            setwatchlist([{ id, poster_path: poster, title, date, media_type, vote_average }, ...watchlist])
                            console.log(poster)
                        }
                    }}>{isInWatchlist ? " - " : "+"}</button>
                </div>

            </div>
            {/* <p>{date}</p> */}
        </div>
    )
}

export default Movie
