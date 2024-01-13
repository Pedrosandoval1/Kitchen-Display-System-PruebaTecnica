import { Status, Data } from '../../interfaces/Index';
import { useAppSelector } from '../../redux/store';
import { LayoutCardsCondition, LayoutCardsP } from '../../style/index.styles'
import { CardItem } from './CardItem'

interface Props {
    status: Status
    isDragging: boolean
    handleUpdateList: (id: number, status: Status) => void
    handleDragging: (dragging: boolean) => void
    i: number
}


export const ContainerCards = ({ status, isDragging, handleDragging, handleUpdateList }: Props) => {
    const orderState = useAppSelector((state) => state.order.data)

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        handleUpdateList(id, status)
        handleDragging(false)
    }

    return (
        <LayoutCardsCondition isDragging={isDragging}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <LayoutCardsP>{status}</LayoutCardsP>

            {
                orderState.map((items: Data) => (
                    status === items.status &&
                    <CardItem
                        data={items}
                        key={items.id}
                        handleDragging={handleDragging}
                    />
                ))

            }
        </LayoutCardsCondition>
    )
}