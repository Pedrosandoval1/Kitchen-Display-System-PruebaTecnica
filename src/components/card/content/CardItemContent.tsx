import { Props } from "../../../interfaces/Index"
import { CardContainer, CardContainerProcess } from "../../../style/index.styles"
import { ButtonCardItem } from "../button/ButtonCardItem"


export const CardItemContent = ({ data, handleDragging }: Props) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    const statusProcess = (
        <>
            {data.status === 'process' && (
                <CardContainerProcess
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <h2>{data.name}</h2>
                    {data.order.map((orders) => (
                        <p key={orders}>Order: {orders}</p>
                    ))}
                    <ButtonCardItem data={data} />
                </CardContainerProcess>
            )}
        </>
    )
    const statusCancelleds = (
        <>
            {data.status === 'cancelleds' && (
                <CardContainer
                >
                    <em>{data.name}  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg></em>
                </CardContainer>
            )}
        </>
    )

    const statusServed = (
        <>
            {data.status === 'served' && (
                <CardContainer
                >
                    <p>{data.name}    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg></p>
                </CardContainer>
            )}
        </>
    )
    const statusDiferent = (
        <>
            {data.status === 'new order' && (
                <CardContainer
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <p>{data.name}</p>
                    <ButtonCardItem data={data} />
                </CardContainer>
            )}
        </>
    )

    return (
        <>
            {
                statusProcess
            }
            {
                statusCancelleds
            }
            {
                statusServed
            }
            {
                statusDiferent
            }

        </>
    );
}
