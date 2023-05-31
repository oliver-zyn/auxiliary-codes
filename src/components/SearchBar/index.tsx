import { GitBranch } from 'phosphor-react'
import { LinkButton } from '../LinkButton'
import { ContainerSearchBar } from './styles'

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ setSearchTerm }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <ContainerSearchBar>
      <div>
        <span>Buscar conteúdo</span>
        <LinkButton
          text="VER NO GITHUB"
          icon={<GitBranch size={20} />}
          link="https://github.com/Vttrium/UTFPR-Codes.git"
          target="_blank"
        />
      </div>
      <input type="text" placeholder="Buscar..." onChange={handleInputChange} />
    </ContainerSearchBar>
  )
}
