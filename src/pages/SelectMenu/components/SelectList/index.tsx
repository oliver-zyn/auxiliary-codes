import { SelectListContainer } from "./styles";

interface Tech {
  icon: string
  name: string
  link: string
}

interface SelectListProps {
  techs: Tech[]
}

export function SelectList({ techs }: SelectListProps) {
  return (
    <SelectListContainer>
      {
        techs.map(tech => <div><img src={tech.icon} alt={tech.name} /> <p>{tech.name}</p></div>)
      }
    </SelectListContainer>
  )
}