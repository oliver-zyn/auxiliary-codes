import styled from "styled-components";

export const SelectHeaderContainer = styled.div`
  background: var(--base-card);
  border-radius: 4px;
  padding: 1.7rem 2.5rem;
  display: flex;
  justify-content: space-between;
`

interface PeriodButtonProps {
  active: boolean;
}

export const PeriodButton = styled.button<PeriodButtonProps>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  cursor: pointer;

  color: ${props => props.active ? 'var(--brand-blue)' : 'var(--base-text)'};
`