import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { ContainerCards } from './styles'
import axios from 'axios'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

type CardsProps = {
  searchTerm: string
  language: string
}

export function Cards({ searchTerm, language }: CardsProps) {
  const [cardData, setCardData] = useState<CardData[]>([])

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/all/${language}`).then((res) => {
      setCardData(res.data)
    })
  }, [language])

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
