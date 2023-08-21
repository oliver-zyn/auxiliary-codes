import { ContainerDownloadCard } from './styles'

import { saveAs } from 'file-saver'

interface CardData {
  id: string
  title: string
  description: string
  githubLink: string
  code: string
}

interface DownloadCardProps {
  cardData: CardData[]
}

export function DownloadCard({cardData}: DownloadCardProps) {
  const handleDownloadArchiveC = () => {
    let content = ''

    try {
      for (let i = 0; i < cardData.length; i++) {
        content += `${cardData[i].code}`
      }

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, 'tudo.h')
    } catch (err) {
      alert(`Ocorreu um erro ao gerar o arquivo: ${err}`)
    }
  }

  return (
    <ContainerDownloadCard onClick={handleDownloadArchiveC}>
      DOWNLOAD DO ARQUIVO COM TODAS AS FUNÇÕES
    </ContainerDownloadCard>
  )
}
