import { CodeSnippet } from "../CodeSnippet";
import { ContainerOpenCardContent } from "./styles";

type OpenCardContentProps = {
    description: string;
    code: string;
}

export function OpenCardContent({ description, code }: OpenCardContentProps) {
    return (
        <ContainerOpenCardContent>
            <p>{description}</p>

            <CodeSnippet code={code} />
        </ContainerOpenCardContent>
    )
}