import { useParams } from 'react-router-dom'
import { OpenCardHeader } from './components/OpenCardHeader'
import { cardData } from '../../utils/cardData'
import { OpenCardContent } from './components/OpenCardContent'

export function OpenCard() {
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
