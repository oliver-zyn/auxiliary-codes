import { ArrowSquareIn, CaretLeft, GitBranch, GithubLogo } from "phosphor-react";
import { ContainerOpenCardHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../LinkButton";

type OpenCardHeaderProps = {
    title: string;
    githubLink: string;
}

export function OpenCardHeader({ title, githubLink }: OpenCardHeaderProps) {
    const navigate = useNavigate();

    function goBack() {
      navigate(-1);
    }

    return (
        <ContainerOpenCardHeader>
            <div>
                <button onClick={goBack}><CaretLeft size={20} /> VOLTAR</button>
                <LinkButton text="VER NO GITHUB" icon={<GitBranch size={20} />} link={githubLink} target="_blank" />
            </div>
            <h1>{title}</h1>
        </ContainerOpenCardHeader>
    )
}