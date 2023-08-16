import { useState } from "react";
import { SelectHeader } from "./components/SelectHeader";
import { SelectList } from "./components/SelectList";

const periodContents = [
  {
    period: 1,
    techs: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        name: 'Linguagem C',
        link: ''
      }
    ]
  },
  {
    period: 2,
    techs: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        name: 'Linguagem C',
        link: ''
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        name: 'Java',
        link: ''
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        name: 'SQL',
        link: ''
      }
    ]
  },
  {
    period: 3,
    techs: []
  },
  {
    period: 4,
    techs: []
  },
  {
    period: 5,
    techs: []
  },
  {
    period: 6,
    techs: []
  },
]

export function SelectMenu() {
  const [periodActive, setPeriodActive] = useState(1);

  function handleSelectPeriodActive(period: number) {
    setPeriodActive(period)
  }

  return (
    <>
      <SelectHeader periodActive={periodActive} selectPeriodActive={handleSelectPeriodActive} />
      {
        periodContents.map(period => {
          return periodActive == period.period && <SelectList techs={period.techs} />
        })
      }
      
    </>
  )
}