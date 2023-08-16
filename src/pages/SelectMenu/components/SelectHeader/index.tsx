import { NumberCircleFive, NumberCircleFour, NumberCircleOne, NumberCircleSix, NumberCircleThree, NumberCircleTwo } from "phosphor-react";
import { PeriodButton, SelectHeaderContainer } from "./styles";

interface SelectHeaderProps {
  periodActive: number
  selectPeriodActive: (period: number) => void
}

export function SelectHeader({ periodActive, selectPeriodActive }: SelectHeaderProps) {
  return (
    <SelectHeaderContainer>
      <PeriodButton active={periodActive == 1} onClick={() => selectPeriodActive(1)}>
        <NumberCircleOne size={48} />
        <p>Período</p>
      </PeriodButton>
      <PeriodButton active={periodActive == 2} onClick={() => selectPeriodActive(2)}>
        <NumberCircleTwo size={48} />
        <p>Período</p>
      </PeriodButton>
      <PeriodButton active={periodActive == 3} onClick={() => selectPeriodActive(3)}>
        <NumberCircleThree size={48} />
        <p>Período</p>
      </PeriodButton>
      <PeriodButton active={periodActive == 4} onClick={() => selectPeriodActive(4)}>
        <NumberCircleFour size={48} />
        <p>Período</p>
      </PeriodButton>
      <PeriodButton active={periodActive == 5} onClick={() => selectPeriodActive(5)}>
        <NumberCircleFive size={48} />
        <p>Período</p>
      </PeriodButton>
      <PeriodButton active={periodActive == 6} onClick={() => selectPeriodActive(6)}>
        <NumberCircleSix size={48} />
        <p>Período</p>
      </PeriodButton>
    </SelectHeaderContainer>
  )
}