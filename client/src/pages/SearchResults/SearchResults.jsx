import { useState, useEffect } from 'react';
import { renderAllCategoryItems } from "../../scripts/tools";
import { getFilteredItemsFromDb } from '../../scripts/api';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    let rows = [];
    const { query } = useParams();

    useEffect(() => {
        getFilteredItemsFromDb(query, setResults);
    }, [query]);

    rows = renderAllCategoryItems(results);

    return (
        <div className="bg-background min-h-screen ">
            <div className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 ">
                {rows}
            </div>
        </div>
    );
};

export default SearchResults;
