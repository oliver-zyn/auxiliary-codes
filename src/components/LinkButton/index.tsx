import { Link } from "react-router-dom";
import { ContainerLinkButton } from "./styles";
import { ReactNode } from "react";

type LinkButtonProps = {
  text: string;
  icon: ReactNode;
  link: string;
  target?: string;
}

export function LinkButton({ text, icon, link, target }: LinkButtonProps) {
  return (
    <ContainerLinkButton>
      <Link to={link} target={target}>
        {text}
        {icon}
      </Link>
    </ContainerLinkButton>
  )
}