import { ArrowSquareIn, CaretLeft } from "phosphor-react";
import { ContainerOpenCardHeader } from "./styles";
import { useNavigate } from "react-router-dom";

type OpenCardHeaderProps = {
    title: string
}

export function OpenCardHeader({ title }: OpenCardHeaderProps) {
    const navigate = useNavigate();

    function goBack() {
      navigate(-1);
    }

    return (
        <ContainerOpenCardHeader>
            <div>
                <a href="#" onClick={goBack}><CaretLeft size={20} /> VOLTAR</a>
                <a href="#">VER NO GITHUB <ArrowSquareIn size={20} /></a>
            </div>
            <h1>{title}</h1>
        </ContainerOpenCardHeader>
    )
}