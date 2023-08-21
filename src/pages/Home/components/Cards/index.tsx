import { Card } from '../Card'
import { ContainerCards } from './styles'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

type CardsProps = {
  searchTerm: string
  cardData: CardData[]
  language: string
}

export function Cards({ searchTerm, cardData, language }: CardsProps) {
  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ContainerCards>
      {filteredCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          id={card.id}
          key={card.id}
          language={language}
        />
      ))}
    </ContainerCards>
  )
}
