import { SelectCardContainer } from "./styles";

interface SelectCardProps {
  name: string
  imgUrl: string
  path: string
}

export function SelectCard({ name, imgUrl, path }: SelectCardProps) {
  return (
    <SelectCardContainer to={`/home/${path}`}>
      <img src={imgUrl} alt={name} />
      <span>{name}</span> 
    </SelectCardContainer>
  )
}