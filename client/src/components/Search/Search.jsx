import { FaSistrix } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { getAllItemsFromDb } from "../../scripts/api";
import { filterItems, renderLiveSearchItems, toggleHidden } from "../../scripts/tools"

const Search = () => { 
    const [allItems, setAllItems] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getAllItemsFromDb(setAllItems);
    }, []);

    const handleChange = (e) => {
        const searchQuery = e.target.value;
        const results = filterItems(allItems, searchQuery);
        setSearchResults(results);

        const elementHidden = document.getElementById('live-search').classList.contains('hidden');

        if (elementHidden && e.target.value !== ""){
            toggleHidden('live-search');
        } else if (!elementHidden && e.target.value === "") {
            toggleHidden('live-search');
        }
    }

    const handleFocus = (e) => {
        if (e.target.value !== ""){
            toggleHidden('live-search');
        }
    }

    const handleBlur = (e) => {
        setTimeout(() => {
            if (!document.getElementById('live-search').classList.contains('hidden')){
                toggleHidden('live-search');
            }
        }, "100");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const searchInput = e.target.search.value;

    //     fetch(`${config.API_BASE_URL}/item-search/${searchInput}`, {
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((result) => {
    //         const sortBy = document.getElementById("sorting").value;
    //         const sortedItems = sortItems(result, sortBy)
    //         setItems(sortedItems);
    //         e.target.reset();
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     });
    }

    let rows = renderLiveSearchItems(searchResults);

    return (
        <>
            <form className="bg-white pb-1 flex flex-row justify-end items-center" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="text" placeholder="Search" name="search" className="bg-white w-22 h-6 p-1 border border-slate-300" required />

                <button type="submit" value="submit" className="h-6 w-6 bg-white p-1 border-t border-r border-b border-slate-300"><FaSistrix /></button>
            </form>
            <div id="live-search" className="h-auto max-h-96 overflow-y-scroll w-96 bg-slate-200 absolute z-10 top-24 right-0 hidden">
                {rows}
            </div>
        </>
    )  

};

export default Search;