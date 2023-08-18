import { SelectCard } from "./components/SelectCard";
import { SelectMenuContainer } from "./styles";

const languages = [
  {
    name: 'Linguagem C',
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    path: 'c'
  },
  {
    name: 'Java',
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    path: 'java'
  },
  {
    name: 'SQL',
    imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    path: 'sql'
  }
]

export function SelectMenu() {
  return (
    <SelectMenuContainer>
      {
        languages.map(language => <SelectCard name={language.name} imgUrl={language.imgUrl} path={language.path} key={language.name} />)
      }
    </SelectMenuContainer>
  )
}