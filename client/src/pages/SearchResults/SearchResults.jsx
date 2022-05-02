import { useState, useEffect } from 'react';
import { renderAllCategoryItems } from "../../scripts/tools";
import { getFilteredItemsFromDb } from '../../scripts/api';
import { Sort } from "../../components/index"

//Figure out how to pass query in when navigating to this page
const SearchResults = () => {
    const [results, setResults] = useState([]);
    let rows = [];

    //temp placeholder query
    let query = "Sk";

    useEffect(() => {
        getFilteredItemsFromDb(query, setResults);
        console.log(results);
    }, []);


    rows = renderAllCategoryItems(results);

    return (
        <div className="bg-background min-h-screen ">
            {/* <Sort items={items} setItems={setItems} /> */}
            <div className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 ">
                {rows}
            </div>
        </div>
    );
};

export default SearchResults;
