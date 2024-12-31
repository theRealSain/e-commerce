import { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onFilterChange(e.target.value);
    };

    return (
        <div className="filter-bar">
            <input type="text"
                placeholder="Search Products"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default FilterBar;