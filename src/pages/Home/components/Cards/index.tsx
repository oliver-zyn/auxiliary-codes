import { cardData } from '../../../../utils/cardData'
import { Card } from '../Card'
import { ContainerCards } from './styles'

type CardsProps = {
  searchTerm: string
}

export function Cards({ searchTerm }: CardsProps) {
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
        />
      ))}
    </ContainerCards>
  )
}
