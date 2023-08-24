import { CaretLeft, GitBranch } from 'phosphor-react'
import { ContainerOpenCardHeader } from './styles'
import { useNavigate } from 'react-router-dom'
import { LinkButton } from '../../../Home/components/LinkButton'

type OpenCardHeaderProps = {
  title: string
  githubLink: string
}

export function OpenCardHeader({ title, githubLink }: OpenCardHeaderProps) {
  const navigate = useNavigate()

  return (
    <ContainerOpenCardHeader>
      <div>
        <button onClick={() => navigate(-1)}>
          <CaretLeft size={20} /> VOLTAR
        </button>
        <LinkButton
          text="VER NO GITHUB"
          icon={<GitBranch size={20} />}
          link={githubLink}
          target="_blank"
        />
      </div>
      <h1>{title}</h1>
    </ContainerOpenCardHeader>
  )
}
