import { CaretLeft, GitBranch } from 'phosphor-react'
import { LinkButton } from '../LinkButton'
import { ContainerSearchBar } from './styles'
import { useNavigate } from 'react-router-dom'

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ setSearchTerm }: SearchBarProps) {
  const navigate = useNavigate()
    
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <ContainerSearchBar>
      <div>
        <button onClick={() => navigate(-1)}>
          <CaretLeft size={20} /> VOLTAR
        </button>
        <LinkButton
          text="VER NO GITHUB"
          icon={<GitBranch size={20} />}
          link="https://github.com/Vttrium/UTFPR-Codes.git"
          target="_blank"
        />
      </div>
      <input type="text" placeholder="Buscar conteúdo..." onChange={handleInputChange} />
    </ContainerSearchBar>
  )
}
