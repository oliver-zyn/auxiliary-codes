import { useParams } from 'react-router-dom'
import { OpenCardHeader } from './components/OpenCardHeader'
import { OpenCardContent } from './components/OpenCardContent'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

interface OpenCardProps {
  cardData: CardData[]
}

export function OpenCard({cardData}: OpenCardProps) {
  const { id } = useParams()

  const thisCard = cardData.filter((card) => card.id == id)

  return (
    <>
      <OpenCardHeader
        title={thisCard[0].title}
        githubLink={thisCard[0].githubLink}
      />
      <OpenCardContent
        description={thisCard[0].description}
        code={thisCard[0].code}
      />
    </>
  )
}
