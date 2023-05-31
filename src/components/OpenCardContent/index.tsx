import { ContainerOpenCardContent } from "./styles";
import { Clipboard } from "phosphor-react";

type OpenCardContentProps = {
    description: string;
    code: string;
}

export function OpenCardContent({ description, code }: OpenCardContentProps) {
    return (
        <ContainerOpenCardContent>
            <p>{description}</p>

            <pre>
                {code}

                <span><Clipboard size={20} /></span>
            </pre>
        </ContainerOpenCardContent>
    )
}