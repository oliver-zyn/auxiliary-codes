import { useState } from "react";
import { Cards } from "../../components/Cards";
import { SearchBar } from "../../components/SearchBar";

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Cards searchTerm={searchTerm} />
        </>
    )
}