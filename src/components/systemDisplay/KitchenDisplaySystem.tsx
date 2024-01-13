import { ContainerCards } from "../card/ContainerCards"
import { Status, Data } from '../../interfaces/Index';
import { UseDragAndDrop } from "../../hook/UseDragAndDrop"
import { Grid } from "../../style/index.styles";
import { updateOrder } from "../../redux/slices/slice";
import { useAppSelector, useAppDispatch } from '../../redux/store';

const typesHero: Status[] = ['process', 'new order', 'served', 'cancelleds']

export const KitchenDisplaySystem = () => {

    const handlerUpdateOrder = (card: Data) => {
        dispatch(updateOrder(card))
    }
    const orderState = useAppSelector((state) => state.order.data);
    const dispatch = useAppDispatch();
    const { isDragging, handleDragging, handleUpdateList } = UseDragAndDrop(orderState, handlerUpdateOrder);

    return (
        <>
            <Grid>
                {
                    typesHero.map(container => (
                        <ContainerCards
                            key={container}
                            status={container}
                            isDragging={isDragging}
                            handleDragging={handleDragging}
                            handleUpdateList={handleUpdateList} i={0} />
                    ))
                }
            </Grid>
        </>
    )
}



