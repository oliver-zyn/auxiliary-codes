import { useState } from 'react'
import { Cards } from './components/Cards'
import { SearchBar } from './components/SearchBar'
import { DownloadCard } from './components/DownloadCard'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

interface HomeProps {
  cardData: CardData[]
}

export function Home({ cardData  }: HomeProps) {  
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <DownloadCard />
      <Cards searchTerm={searchTerm} cardData={cardData} />
    </>
  )
}
