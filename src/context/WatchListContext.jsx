import { createContext, useState } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({children}) => {
    const [watchlist, setWatchList] = useState([])
    const taggleWatchList = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id)

        if (index === -1) {
            setWatchList([...watchlist, movie])
        } else {
            setWatchList([...watchlist.slice(0, index),...watchlist.slice(index +1)])
        }
    }

    return (
        <WatchListContext.Provider value={{watchlist, taggleWatchList}}>
            {children}
        </WatchListContext.Provider>
    )
}