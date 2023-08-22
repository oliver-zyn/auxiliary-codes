import { useParams } from 'react-router-dom'
import { OpenCardHeader } from './components/OpenCardHeader'
import { OpenCardContent } from './components/OpenCardContent'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

interface OpenCardProps {
  language: string
}

export function OpenCard({language}: OpenCardProps) {
  const [card, setCard] = useState<CardData>({id: '', title: '', description: '', githubLink: '', code: ''})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/open/?id=${id}&language=${language}`).then((res) => {
      console.log(res.data);
      setCard(res.data)
      
    })
  }, [id, language])

  return (
    <>
      <OpenCardHeader
        title={card.title}
        githubLink={card.githubLink}
      />
      <OpenCardContent
        description={card.description}
        code={card.code}
      />
    </>
  )
}
