import { createContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const SearchContext = createContext({
    searchTextValue: '',
    searchFilter: (searchText) =>{}
});

export function SearchContextProvider(props) {
    const [searchValue, setSearchValue] = useState('');

    function searchHandler(searchText) {
        setSearchValue(searchText);
    }
    
    const context = {
        searchTextValue: searchValue,
        searchFilter: searchHandler
    };
    return (
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;
