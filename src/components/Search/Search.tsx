import { useState } from 'react';
import { SearchIcon } from '../icons'
import './Search.scss'

export const Search = () => {
    const [search, setSearch] = useState("");
    return(
        <form
                action="#"
                className="main-header-tools__search-form"
                name="search-form"
              >
                <input
                  type="text"
                  className="main-header-tools__search-input"
                  placeholder="Поиск"
                  name="search-input"
                  value={search}
                  onChange={(e: any) => setSearch(e.target.value)}
                />
                <SearchIcon/>
              </form>
    )
}