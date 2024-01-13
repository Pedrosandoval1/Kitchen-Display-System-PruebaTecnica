import { Data } from "../../interfaces/Index"
import { CardItemContent } from "./content/CardItemContent";

interface Props {
    data: Data,
    handleDragging: (dragging: boolean) => void,
}

export const CardItem = ({ data, handleDragging }: Props) => {
    return (
        <>
            <CardItemContent data={data} handleDragging={handleDragging}></CardItemContent>
        </>
    )
}      