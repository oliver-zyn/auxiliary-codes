import { useState } from "react";
import { Cards } from "../../components/Cards";
import { SearchBar } from "../../components/SearchBar";
import { DownloadCard } from "../../components/DownloadCard";

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <DownloadCard />
            <Cards searchTerm={searchTerm} />
        </>
    )
}