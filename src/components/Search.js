import { useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import SearchContext from '../store/search-context';

function Search() {
    const searchRef = useRef();
    const searchCtx = useContext(SearchContext);

    function handelSearch(e) {
        e.preventDefault();
        const enteredSearch = searchRef.current.value;
        searchCtx.searchFilter(enteredSearch);
    }
    return <Form >
        <Form.Control className="mb-3" style={{
            width: '50%',
            margin: '0 0 0 500px'
        }}
        type="text" placeholder="search" id='search' onChange={handelSearch} ref={searchRef} />
    </Form >
}
export default Search;