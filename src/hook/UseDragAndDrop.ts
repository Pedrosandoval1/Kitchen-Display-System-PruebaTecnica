import { useState } from "react";
import { Data, Status } from "../interfaces/Index";

export const UseDragAndDrop = (listItems: Data[], handlerUpdateOrder: (card: Data) => void) => {
    const [isDragging, setIsDragging] = useState(false)
    // const [listItems, setListItems] = useState<Data[]>(initialState)

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleUpdateList = (id: number, status: Status) => {

        const card = listItems.find(item => item.id === id)

        if (card && card.status !== status) {

            const newCard = { ...card, status };

            handlerUpdateOrder(newCard)
        }
    }

    return {
        isDragging,
        listItems,
        handleDragging,
        handleUpdateList
    }
}