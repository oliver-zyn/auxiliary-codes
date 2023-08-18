import { SelectCardContainer } from "./styles";

export function SelectCard() {
  return (
    <SelectCardContainer>
      <div className="card__body">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
      </div>
      <span>Linguagem C</span>
    </SelectCardContainer>
  )
}