import { useParams } from "react-router-dom";
import { OpenCardHeader } from "../../components/OpenCardHeader";
import { cardData } from "../../utils/cardData";
import { OpenCardContent } from "../../components/OpenCardContent";
import { Header } from "../../components/Header";

export function OpenCard() {

    const { id } = useParams()

    const thisCard = cardData.filter((card) =>
        card.id == id
    );

    return (
        <>
            <Header />
            <main>
                <OpenCardHeader title={thisCard[0].title} />
                <OpenCardContent description={thisCard[0].description} code={thisCard[0].code} />
            </main>
        </>
    )
}