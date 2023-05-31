import { useState } from "react";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <Header />
            <main>
                <SearchBar setSearchTerm={setSearchTerm} />
                <Cards searchTerm={searchTerm} />
            </main>
        </>
    )
}