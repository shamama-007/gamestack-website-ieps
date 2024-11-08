import { useEffect, useState } from "react";
import "../customStyle.scss";

import { IoCloseOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchToggle }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(searchToggle);
    }, [searchToggle])

    return (
        <div>
            <div className={`fullscreen-search ${isActive ? "active" : ""}`}>
                    <button className="close-search-btn" onClick={()=> setIsActive(false)}>
                        <IoCloseOutline />
                    </button>
                <form className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
