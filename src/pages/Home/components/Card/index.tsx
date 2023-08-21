import { ArrowSquareIn } from 'phosphor-react'
import { ContainerCard } from './styles'
import { LinkButton } from '../LinkButton'

type CardProps = {
  id: string
  title: string
  description: string
  language: string
}

export function Card({ id, title, description, language }: CardProps) {
  return (
    <ContainerCard>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <LinkButton
        text="ABRIR CÓDIGO"
        icon={<ArrowSquareIn size={20} />}
        link={`/card/${language}/${id}`}
      />
    </ContainerCard>
  )
}
