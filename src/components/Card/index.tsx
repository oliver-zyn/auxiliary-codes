import { ArrowSquareIn } from "phosphor-react";
import { ContainerCard } from "./styles";

type CardProps = {
    id: string;
    title: string;
    description: string;
}

export function Card({ id, title, description }: CardProps) {
    return (
        <ContainerCard>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <a href={`/card/${id}`}>ABRIR CÓDIGO <ArrowSquareIn size={20} /></a>
        </ContainerCard>
    )
}