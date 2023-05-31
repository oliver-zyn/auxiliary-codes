import { ContainerSearchBar } from "./styles";

type SearchBarProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({ setSearchTerm  }: SearchBarProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <ContainerSearchBar>
            <span>Buscar conteúdo</span>
            <input type="text" placeholder="Buscar..." onChange={handleInputChange} />
        </ContainerSearchBar>
    )
}