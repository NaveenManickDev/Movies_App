import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({children}) => {
    const [watchlist, setWatchList] = useState([])

    const [genreList, setGenreList] = useState([])
     useEffect(() => {
    
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=5c8e33ae58b4b69af48f3444fd46fc74`
    
       
    
        fetch(url)
          .then((response) => response.json())
          .then((data) => setGenreList(data.genres || []))
      }, [])

    const taggleWatchList = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id)

        if (index === -1) {
            setWatchList([...watchlist, movie])
        } else {
            setWatchList([...watchlist.slice(0, index),...watchlist.slice(index +1)])
        }
    }

    return (
        <WatchListContext.Provider value={{watchlist, taggleWatchList, genreList}}>
            {children}
        </WatchListContext.Provider>
    )
}